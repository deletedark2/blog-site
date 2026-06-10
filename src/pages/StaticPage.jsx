import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const pages = {
  babaniz: {
    title: 'Babanız',
    emoji: '👨',
    content: [
      'Babanız burada. Evet, tam burada. Gözünüzün içine bakıyor.',
      'Yıllarca "büyüyünce ne olacaksın?" diye sordu. Cevabı hâlâ bekliyoruz.',
      'Sabah 6\'da kalkar, geceye kadar çalışır. Yorgun gözlerle eve gelir, yine de "nasılsınız" diye sorar.',
      'Bir baba, söylemediği bin şeyi yaşadığı her gün gösterir.',
      'O sizi seviyor. Belki söylemiyor. Ama her sabah kalktığında siz için kalıyor.',
    ],
    quote: '"En büyük yatırım, bir babanın çocuğuna ayırdığı zamandır."',
  },
  burda: {
    title: 'Burda',
    emoji: '📍',
    content: [
      'Burdasın. Bu anın içindesin. Bunu bir dakika fark et.',
      'Geçmiş bitti. Gelecek henüz gelmedi. Geriye sadece şu an kalıyor.',
      'Telefonu bırak. Etrafına bak. Yanındaki insanlar bir gün olmayacak.',
      'Babanın sesi, annenin elleri, arkadaşının kahkahası — bunlar geçici.',
      '"Burda" olmak, zihnini şu ana getirmektir. Başka bir yere değil.',
    ],
    quote: '"Şu an burada olmak, en nadir bulunan lükslerden biridir."',
  },
  ayik: {
    title: 'Ayık',
    emoji: '👁️',
    content: [
      'Ayık ol. Etrafında olan biteni gör.',
      'Ekrana bakarak kaçırdıklarını say. Sayamıyorsan zaten kaçırmışsın.',
      'Ayık olmak; haberleri takip etmek değil, kendi hayatının farkında olmaktır.',
      'Uyuşturan şeyler çok. Telefon, gürültü, telaş, sahte aciliyet...',
      'Babanın verdiği sözü hatırlıyor musun? O ayıktı. Sen de ol.',
    ],
    quote: '"Uyanık olmak bir tercih, uyumak ise alışkanlıktır."',
  },
  olun: {
    title: 'Olun',
    emoji: '🌱',
    content: [
      'Ne olun? Her şey olun. Ama önce insan olun.',
      'Sözünüzün arkasında duran biri olun.',
      'Yanınızdaki insanı küçük düşürmeyen biri olun.',
      'Hata yapın, kabul edin, düzeltin. Tekrar deneyin. Bu yeter.',
      'Babanız ne dediyse, en azından onu deneyin. "Olun" dedi çünkü.',
    ],
    quote: '"İnsan olmak kolay, iyi insan olmak sanattır."',
  },
}

export default function StaticPage({ slug }) {
  const page = pages[slug]
  if (!page) return null

  return (
    <div className="static-page">
      <div className="static-page-inner">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} /> Geri Dön
        </Link>

        <div className="static-emoji">{page.emoji}</div>
        <h1>{page.title}</h1>

        <blockquote className="static-quote">{page.quote}</blockquote>

        <div className="static-content">
          {page.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
