-- 1. POSTS tablosu
CREATE TABLE posts (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  excerpt text,
  content text,
  category text DEFAULT 'technology',
  author_name text DEFAULT 'Admin',
  author_avatar text DEFAULT 'AD',
  image_url text,
  featured boolean DEFAULT false,
  read_time text DEFAULT '5 dk',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Row Level Security
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Herkes okuyabilir
CREATE POLICY "Posts herkese açık" ON posts FOR SELECT USING (true);

-- Sadece giriş yapan kullanıcı yazabilir/düzenleyebilir/silebilir
CREATE POLICY "Auth kullanıcı yönetebilir" ON posts
  FOR ALL USING (auth.role() = 'authenticated');

-- 2. SUBSCRIBERS tablosu (bülten aboneleri)
CREATE TABLE subscribers (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

-- Herkes abone olabilir
CREATE POLICY "Herkes abone olabilir" ON subscribers FOR INSERT WITH CHECK (true);

-- Sadece giriş yapan kullanıcı aboneleri görebilir
CREATE POLICY "Auth kullanıcı aboneleri görebilir" ON subscribers
  FOR SELECT USING (auth.role() = 'authenticated');

-- 3. STORAGE BUCKET
-- Supabase Dashboard > Storage > New Bucket
-- Bucket adı: post-images
-- Public: true (açık olarak işaretle)
