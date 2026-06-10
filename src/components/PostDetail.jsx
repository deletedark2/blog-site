import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { format } from 'date-fns'
import { tr } from 'date-fns/locale'
import { usePost } from '../hooks/usePost'
import { categories } from '../data/posts'

export default function PostDetail() {
  const { id } = useParams()
  const { post, loading } = usePost(id)

  if (loading) return <div className="detail-loading"><div className="spinner" /></div>
  if (!post) return (
    <div className="detail-notfound">
      <h2>Yazı bulunamadı</h2>
      <Link to="/" className="btn-primary">Ana Sayfaya Dön</Link>
    </div>
  )

  const catLabel = categories.find(c => c.id === post.category)?.label ?? post.category
  const dateStr = post.created_at || post.date
  const formattedDate = dateStr
    ? format(new Date(dateStr), 'd MMMM yyyy', { locale: tr })
    : ''

  return (
    <article className="post-detail">
      <div className="post-detail-header">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} /> Geri Dön
        </Link>
        <span className="tag">{catLabel}</span>
        <h1>{post.title}</h1>
        <div className="post-detail-meta">
          <div className="avatar">{post.author_avatar || post.author?.avatar || 'AU'}</div>
          <span className="author-name">{post.author_name || post.author?.name}</span>
          <span className="dot">·</span>
          <Calendar size={14} />
          <span>{formattedDate}</span>
          <span className="dot">·</span>
          <Clock size={14} />
          <span>{post.read_time || post.readTime}</span>
        </div>
      </div>

      {(post.image_url || post.image) && (
        <div className="post-detail-cover">
          <img src={post.image_url || post.image} alt={post.title} />
        </div>
      )}

      <div className="post-detail-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content || post.excerpt || ''}
        </ReactMarkdown>
      </div>
    </article>
  )
}
