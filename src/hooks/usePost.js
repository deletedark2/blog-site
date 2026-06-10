import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { posts as staticPosts } from '../data/posts'

export function usePost(id) {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    async function fetch() {
      setLoading(true)
      if (!supabase) {
        setPost(staticPosts.find(p => String(p.id) === String(id)) || null)
        setLoading(false)
        return
      }
      try {
        const { data, error } = await supabase.from('posts').select('*').eq('id', id).single()
        if (error) throw error
        setPost(data)
      } catch {
        setPost(staticPosts.find(p => String(p.id) === String(id)) || null)
      } finally {
        setLoading(false)
      }
    }
    fetch()
  }, [id])

  return { post, loading }
}
