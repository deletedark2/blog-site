import { useState } from 'react'
import { categories } from '../data/posts'
import { usePosts } from '../hooks/usePosts'
import PostCard from './PostCard'

export default function PostGrid() {
  const [active, setActive] = useState('all')
  const { posts, loading } = usePosts(active)

  return (
    <section id="posts" className="post-grid-section">
      <h2 className="section-title">Son Yazılar</h2>

      <div className="category-tabs">
        {categories.map(c => (
          <button
            key={c.id}
            className={`tab ${active === c.id ? 'active' : ''}`}
            onClick={() => setActive(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="grid-loading">
          {[1,2,3].map(i => <div key={i} className="skeleton-card" />)}
        </div>
      ) : (
        <div className="post-grid">
          {posts.map(post => <PostCard key={post.id} post={post} />)}
        </div>
      )}
    </section>
  )
}
