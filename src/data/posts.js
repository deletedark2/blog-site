export const categories = [
  { id: 'all', label: 'Tümü' },
  { id: 'technology', label: 'Teknoloji' },
  { id: 'design', label: 'Tasarım' },
  { id: 'lifestyle', label: 'Yaşam' },
  { id: 'science', label: 'Bilim' },
]

export const posts = [
  {
    id: 1,
    title: 'React 19 ile Gelen Yenilikler',
    excerpt: 'React 19 büyük bir sürüm olarak geldi. Server Components, Actions ve yeni hook\'lar hakkında bilmeniz gereken her şey burada.',
    content: `## React 19 Neden Önemli?

React 19, ekibin yıllarca üzerinde çalıştığı büyük bir yeniden yapılanmayı temsil ediyor. Yeni özellikler, modern web uygulamalarının geliştirilme biçimini köklü biçimde değiştiriyor.

## Server Components

Server Components, React bileşenlerinin sunucu tarafında render edilmesine olanak tanıyor. Bu sayede:

- **Daha küçük bundle boyutu** — istemciye gönderilen JavaScript azalıyor
- **Daha hızlı ilk yükleme** — HTML sunucudan hazır geliyor
- **Doğrudan veritabanı erişimi** — API katmanı olmadan veri çekebiliyorsunuz

\`\`\`jsx
// Server Component — sadece sunucuda çalışır
async function PostList() {
  const posts = await db.posts.findMany() // doğrudan DB erişimi
  return <ul>{posts.map(p => <li key={p.id}>{p.title}</li>)}</ul>
}
\`\`\`

## Actions API

Formları ve mutasyonları yönetmek artık çok daha kolay. \`useFormStatus\` ve \`useActionState\` hook\'ları ile loading state, error handling otomatik olarak yönetiliyor.

\`\`\`jsx
function ContactForm() {
  const [state, action] = useActionState(sendMessage, null)
  return (
    <form action={action}>
      <input name="message" />
      <button type="submit">Gönder</button>
      {state?.error && <p>{state.error}</p>}
    </form>
  )
}
\`\`\`

## Yeni Hooks

- \`use()\` — Promise ve Context okuma için yeni primitive
- \`useOptimistic()\` — optimistik UI güncellemeleri için
- \`useFormStatus()\` — form submit durumu için

## Sonuç

React 19, developer experience'ı büyük ölçüde iyileştiriyor. Server Components ve Actions ile birlikte, daha az boilerplate kod yazarak daha performanslı uygulamalar geliştirmek mümkün hale geliyor.`,
    category: 'technology',
    author_name: 'Ali Yılmaz',
    author_avatar: 'AY',
    date: '2026-05-20',
    created_at: '2026-05-20T10:00:00Z',
    read_time: '5 dk',
    featured: true,
    image_url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
  },
  {
    id: 2,
    title: 'Modern UI Tasarımında Renk Teorisi',
    excerpt: 'Kullanıcı deneyimini güçlendiren renk seçimleri ve kontrast dengesi üzerine kapsamlı bir rehber.',
    content: `## Renk, Sadece Estetik Değil

Renk teorisi, UI tasarımında belki de en az anlaşılan ama en çok etkili olan unsurlardan biri. Doğru renk seçimi kullanıcıları yönlendirir, duygu iletir ve marka kimliğini güçlendirir.

## Temel Kavramlar

### Renk Çemberi

Renk çemberi, renklerin birbirleriyle olan ilişkisini gösterir. Temel uyum türleri:

- **Tamamlayıcı (Complementary):** Zıt renkler — güçlü kontrast
- **Analogous:** Komşu renkler — huzurlu, uyumlu his
- **Triadic:** Üçgen oluşturan renkler — dinamik ve canlı

### Değer ve Doygunluk

\`\`\`
Ton (Hue): Rengin kendisi (kırmızı, mavi, yeşil...)
Doygunluk (Saturation): Rengin canlılığı
Parlaklık (Brightness): Rengin açıklık/koyuluğu
\`\`\`

## Karanlık Tema Tasarımı

Karanlık temalar sadece moda değil, göz yorgunluğunu azaltan pratik bir çözüm. Dikkat edilmesi gerekenler:

1. **Gerçek siyah kullanmayın** — \`#0f0f13\` gibi hafif renkli koyu tonlar daha doğal görünür
2. **Kontrast oranı en az 4.5:1 olmalı** — WCAG AA standardı
3. **Renkli gölgeler ekleyin** — saf siyah gölge yerine renk tonu eklenmiş gölgeler

## Renk Sistemleri

Büyük projelerde renkleri CSS değişkenleriyle sistemleştirin:

\`\`\`css
:root {
  --color-primary-50: #eff6ff;
  --color-primary-500: #3b82f6;
  --color-primary-900: #1e3a5f;
}
\`\`\`

## Araçlar

- **Coolors.co** — palet oluşturma
- **Contrast Checker** — WCAG uyumluluğu kontrol
- **Realtime Colors** — gerçek zamanlı önizleme`,
    category: 'design',
    author_name: 'Zeynep Kaya',
    author_avatar: 'ZK',
    date: '2026-05-15',
    created_at: '2026-05-15T10:00:00Z',
    read_time: '7 dk',
    featured: true,
    image_url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
  },
  {
    id: 3,
    title: 'Yapay Zeka ve Geleceğimiz',
    excerpt: 'GPT-5, Gemini Ultra ve diğer büyük dil modellerinin toplum üzerindeki potansiyel etkileri.',
    content: `## Büyük Dil Modelleri Çağı

2024-2026 yılları arasında yapay zeka teknolojisi inanılmaz bir hızla ilerledi. GPT-4'ten sonra gelen modeller sadece dil anlama konusunda değil, kod yazma, görsel analiz ve çok adımlı akıl yürütme konularında da önemli adımlar attı.

## Günlük Hayata Etkileri

### İş Hayatı

Yapay zeka araçları birçok tekrarlayan görevi otomatikleştiriyor:

- **Kod yazımı** — GitHub Copilot ve benzeri araçlar geliştirici verimliliğini %40'a kadar artırıyor
- **İçerik üretimi** — pazarlama materyalleri, e-postalar, raporlar
- **Müşteri hizmetleri** — 7/24 destek botları

### Eğitim

Kişiselleştirilmiş öğrenme deneyimleri artık mümkün. Her öğrencinin hızına ve anlama seviyesine göre uyarlanan ders materyalleri.

## Dikkat Edilmesi Gereken Riskler

> "Yapay zeka güçlü bir araçtır, ama her araç gibi nasıl kullanıldığına bağlı olarak faydalı ya da zararlı olabilir."

1. **Dezenformasyon** — gerçekçi ama yanlış içerik üretme riski
2. **İş kayıpları** — bazı sektörlerde otomasyonun hızlanması
3. **Gizlilik** — büyük veri modellerinin eğitim verisi sorunları
4. **Bağımlılık** — kritik düşünme becerilerinin zayıflaması

## Sonuç

Yapay zeka ne tamamen tehlikeli ne de tamamen masum bir teknoloji. Önemli olan, bu araçları bilinçli ve eleştirel bir bakış açısıyla kullanmak.`,
    category: 'science',
    author_name: 'Murat Demir',
    author_avatar: 'MD',
    date: '2026-05-10',
    created_at: '2026-05-10T10:00:00Z',
    read_time: '8 dk',
    featured: false,
    image_url: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
  },
  {
    id: 4,
    title: 'Uzaktan Çalışma Verimliliği',
    excerpt: 'Evden çalışırken odaklanmayı artıracak 10 pratik yöntem ve araç önerisi.',
    content: `## Evden Çalışmanın Tuzakları

Pandemi sonrasında uzaktan çalışma kalıcı hale geldi. Ama "ev" ile "ofis"i aynı mekanda birleştirmek sandığından zor.

## 10 Pratik Yöntem

### 1. Sabit Çalışma Saatleri Belirle

Başlangıç ve bitiş saati olmayan bir iş günü, yaşamınıza sızar. Takvime gerçek toplantılar gibi "çalışma zamanı" ekleyin.

### 2. Fiziksel Ayrım Oluştur

Mümkünse ayrı bir oda, değilse belirli bir köşe. Sadece orada oturduğunuzda "çalışma moduna" girdiğinizi beyne öğretin.

### 3. Pomodoro Tekniği

\`\`\`
25 dk çalış → 5 dk mola → tekrar
4 pomodoro'dan sonra 15-30 dk uzun mola
\`\`\`

### 4. Sabah Ritüeli

İşe başlamadan önce küçük bir hazırlık rutini oluşturun. Kahve yapmak, kısa yürüyüş, günün planını yazmak.

### 5. Bildirim Yönetimi

Slack, e-posta ve telefon bildirimlerini çalışma saatlerinde kapatın. Async iletişimi benimseyin.

## Tavsiye Edilen Araçlar

| Araç | Kullanım |
|------|----------|
| Notion | Not alma, proje yönetimi |
| Toggl | Zaman takibi |
| Focusmate | Sanal çalışma arkadaşı |
| Brain.fm | Konsantrasyon müziği |

## Tükenmişliği Önleme

Uzaktan çalışanların en büyük riski: sınır koymamak. Her akşam "bitti" ritüeli yapın — bilgisayarı kapatın, bildirimleri susturun.`,
    category: 'lifestyle',
    author_name: 'Selin Arslan',
    author_avatar: 'SA',
    date: '2026-05-05',
    created_at: '2026-05-05T10:00:00Z',
    read_time: '4 dk',
    featured: false,
    image_url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
  },
  {
    id: 5,
    title: 'TypeScript 5.5 Özellikleri',
    excerpt: 'Yeni inferred type predicates, isolatedDeclarations ve daha hızlı derleme süreleri incelemesi.',
    content: `## TypeScript 5.5 ile Neler Değişti?

TypeScript her yeni sürümde hem dil özelliklerini genişletiyor hem de derleyici performansını iyileştiriyor. 5.5 sürümü bu açıdan özellikle dikkat çekici.

## Inferred Type Predicates

Artık TypeScript, type guard fonksiyonlarını otomatik olarak çıkarsaklayabiliyor:

\`\`\`typescript
// Önceden: manuel type predicate gerekiyordu
function isString(x: unknown): x is string {
  return typeof x === 'string'
}

// Artık: TypeScript otomatik anlıyor
const numbers = [1, 2, null, 3, null].filter(n => n !== null)
// numbers: number[]  ← artık (number | null)[] değil!
\`\`\`

## Isolated Declarations

Büyük monorepolarda paralel derleme için kritik bir özellik. Her dosyanın bağımsız olarak derlenebilmesini sağlıyor.

\`\`\`typescript
// tsconfig.json
{
  "compilerOptions": {
    "isolatedDeclarations": true
  }
}
\`\`\`

## Performans İyileştirmeleri

- **%10-15 daha hızlı derleme** büyük projelerde
- **Daha az bellek kullanımı** incremental build'lerde
- **Hızlı yeniden derleme** değişiklik algılama iyileştirmeleri

## Pratik Tavsiyeler

TypeScript 5.5'e geçiş yaparken:

1. \`strict: true\` modunu aktif edin
2. \`noUncheckedIndexedAccess\` ekleyin
3. Eski type assertion'ları gözden geçirin

TypeScript'in her sürümünde daha az "any" yazmak mümkün hale geliyor — bu, kodun daha güvenli ve bakımı daha kolay olması anlamına geliyor.`,
    category: 'technology',
    author_name: 'Ali Yılmaz',
    author_avatar: 'AY',
    date: '2026-04-28',
    created_at: '2026-04-28T10:00:00Z',
    read_time: '6 dk',
    featured: false,
    image_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
  },
  {
    id: 6,
    title: 'Minimalist Yaşam Felsefesi',
    excerpt: 'Daha az sahip olarak daha fazla değer yaratmanın yolları ve minimalizmin psikolojik faydaları.',
    content: `## Minimalizm Nedir?

Minimalizm, "az çoktur" felsefesini hayatın her alanına uygulamak demek. Eşya azaltmakla başlar ama asıl derinliği zihinde yapılan temizlikte yatar.

## Neden Minimalizm?

Modern tüketim kültürü, sürekli "daha fazla" vaadi üzerine kuruludur. Yeni telefon, yeni araba, yeni giysiler — ama bu eşyaların verdiği mutluluk birkaç haftada sönüyor.

> "Sahip olduğun şeyler seni sahip olmaya başladığında, asıl sorun ortaya çıkar." — Fight Club

## Pratik Başlangıç Noktaları

### Eşya Azaltma: 90/90 Kuralı

Son 90 gün içinde kullandın mı? Önümüzdeki 90 gün içinde kullanacak mısın? İkisine de "hayır" dersen — git.

### Dijital Minimalizm

- Kullanmadığın uygulamaları sil
- E-posta listelerinden çık
- Sosyal medya bildirimlerini kapat
- Her gece telefonu başka odada şarj et

### Finansal Minimalizm

\`\`\`
Gelir - Tasarruf = Harcama
(Tasarrufu önce ayır, kalanıyla yaşa)
\`\`\`

## Psikolojik Faydalar

Araştırmalar minimalist yaşam tarzının şunlara katkı sağladığını gösteriyor:

- Karar yorgunluğunun azalması
- Odaklanma kapasitesinin artması
- Genel yaşam memnuniyetinin yükselmesi
- Finansal stresin azalması

## Son Söz

Minimalizm bir hedef değil, bir araç. Daha az eşya, daha az çeldiriciye, daha fazla dikkat anlamına geliyor. Ve dikkat — zamanımızın en değerli kaynağı.`,
    category: 'lifestyle',
    author_name: 'Zeynep Kaya',
    author_avatar: 'ZK',
    date: '2026-04-20',
    created_at: '2026-04-20T10:00:00Z',
    read_time: '5 dk',
    featured: false,
    image_url: 'https://images.unsplash.com/photo-1507149833265-60c372daea22?w=800&q=80',
  },
]
