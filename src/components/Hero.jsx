import { ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { tr } from 'date-fns/locale'
import { useFeaturedPosts } from '../hooks/usePosts'
import { categories } from '../data/posts'

export default function Hero() {
  const { posts: featured } = useFeaturedPosts()

  return (
    <section className="hero">
      <div className="hero-text">
        <p className="hero-tag">Hoş Geldiniz</p>
        <h1>Fikir, Teknoloji ve&nbsp;İlham</h1>
        <p className="hero-sub">
          Yazılım, tasarım ve yaşam üzerine derinlemesine yazılar. Her hafta yeni içerik.
        </p>
        <a href="#posts" className="btn-primary">
          Yazıları Keşfet <ArrowDown size={16} />
        </a>
      </div>

      <div className="hero-cards">
        {featured.map(post => {
          const catLabel = categories.find(c => c.id === post.category)?.label ?? post.category
          const dateStr = post.created_at || post.date
          const formattedDate = dateStr ? format(new Date(dateStr), 'd MMM yyyy', { locale: tr }) : ''
          return (
            <Link to={`/post/${post.id}`} key={post.id} className="hero-card">
              <img src={post.image_url || post.image} alt={post.title} />
              <div className="hero-card-body">
                <span className="tag">{catLabel}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="hero-card-meta">
                  <div className="avatar">{post.author_avatar || post.author?.avatar}</div>
                  <span>{post.author_name || post.author?.name}</span>
                  <span className="dot">·</span>
                  <span>{formattedDate}</span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
