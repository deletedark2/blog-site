-- Storage bucket politikaları
CREATE POLICY "Görsel yükleme - auth kullanıcı" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'post-images');

CREATE POLICY "Görsel okuma - herkes" ON storage.objects
  FOR SELECT TO public
  USING (bucket_id = 'post-images');

CREATE POLICY "Görsel silme - auth kullanıcı" ON storage.objects
  FOR DELETE TO authenticated
  USING (bucket_id = 'post-images');

CREATE POLICY "Görsel güncelleme - auth kullanıcı" ON storage.objects
  FOR UPDATE TO authenticated
  USING (bucket_id = 'post-images');
