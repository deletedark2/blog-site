import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { posts as staticPosts } from '../data/posts'

export function usePosts(category = 'all') {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetch() {
      setLoading(true)
      if (!supabase) {
        const filtered = category === 'all' ? staticPosts : staticPosts.filter(p => p.category === category)
        setPosts(filtered)
        setLoading(false)
        return
      }
      try {
        let query = supabase.from('posts').select('*').order('created_at', { ascending: false })
        if (category !== 'all') query = query.eq('category', category)
        const { data, error } = await query
        if (error) throw error
        setPosts(data)
      } catch {
        const filtered = category === 'all' ? staticPosts : staticPosts.filter(p => p.category === category)
        setPosts(filtered)
      } finally {
        setLoading(false)
      }
    }
    fetch()
  }, [category])

  return { posts, loading }
}

export function useFeaturedPosts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetch() {
      setLoading(true)
      if (!supabase) {
        setPosts(staticPosts.filter(p => p.featured))
        setLoading(false)
        return
      }
      try {
        const { data, error } = await supabase
          .from('posts').select('*').eq('featured', true).limit(2)
        if (error) throw error
        setPosts(data)
      } catch {
        setPosts(staticPosts.filter(p => p.featured))
      } finally {
        setLoading(false)
      }
    }
    fetch()
  }, [])

  return { posts, loading }
}
