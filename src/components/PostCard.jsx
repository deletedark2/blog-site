import { Link } from 'react-router-dom'
import { Clock } from 'lucide-react'
import { format } from 'date-fns'
import { tr } from 'date-fns/locale'
import { categories } from '../data/posts'

export default function PostCard({ post }) {
  const catLabel = categories.find(c => c.id === post.category)?.label ?? post.category
  const dateStr = post.created_at || post.date
  const formattedDate = dateStr ? format(new Date(dateStr), 'd MMM', { locale: tr }) : ''

  return (
    <Link to={`/post/${post.id}`} className="post-card">
      <div className="post-card-img">
        <img src={post.image_url || post.image} alt={post.title} />
        <span className="tag">{catLabel}</span>
      </div>
      <div className="post-card-body">
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <div className="post-card-footer">
          <div className="author">
            <div className="avatar sm">{post.author_avatar || post.author?.avatar}</div>
            <span>{post.author_name || post.author?.name}</span>
          </div>
          <div className="meta-right">
            <Clock size={13} />
            <span>{post.read_time || post.readTime}</span>
            <span className="dot">·</span>
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
