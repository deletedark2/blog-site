import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Pencil, Trash2, LogOut, Upload, X, Check, Feather } from 'lucide-react'
import { supabase } from '../lib/supabase'
import { useAuth } from '../hooks/useAuth'
import { categories } from '../data/posts'

const EMPTY_FORM = {
  title: '', excerpt: '', content: '', category: 'technology',
  author_name: '', author_avatar: '', image_url: '', featured: false, read_time: '5 dk',
}

export default function AdminPage() {
  const { signOut } = useAuth()
  const [posts, setPosts] = useState([])
  const [form, setForm] = useState(EMPTY_FORM)
  const [editId, setEditId] = useState(null)
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)
  const [uploading, setUploading] = useState(false)
  const fileRef = useRef()

  useEffect(() => { loadPosts() }, [])

  async function loadPosts() {
    if (!supabase) return
    const { data } = await supabase.from('posts').select('id, title, category, created_at').order('created_at', { ascending: false })
    if (data) setPosts(data)
  }

  function startEdit(post) {
    setForm({ ...EMPTY_FORM, ...post })
    setEditId(post.id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function cancelEdit() {
    setForm(EMPTY_FORM)
    setEditId(null)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!supabase) return alert('Supabase bağlantısı yok. .env dosyasını doldurun.')
    setLoading(true)
    const payload = { ...form }
    if (editId) {
      await supabase.from('posts').update(payload).eq('id', editId)
    } else {
      await supabase.from('posts').insert([payload])
    }
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
    cancelEdit()
    loadPosts()
    setLoading(false)
  }

  async function handleDelete(id) {
    if (!confirm('Bu yazıyı silmek istiyor musunuz?')) return
    await supabase.from('posts').delete().eq('id', id)
    loadPosts()
  }

  async function handleImageUpload(e) {
    const file = e.target.files?.[0]
    if (!file || !supabase) return
    setUploading(true)
    const path = `${Date.now()}-${file.name}`
    const { data, error } = await supabase.storage.from('post-images').upload(path, file)
    if (!error) {
      const { data: urlData } = supabase.storage.from('post-images').getPublicUrl(data.path)
      setForm(f => ({ ...f, image_url: urlData.publicUrl }))
    }
    setUploading(false)
  }

  const cats = categories.filter(c => c.id !== 'all')

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <Link to="/" className="admin-logo"><Feather size={18} /> BlogSite</Link>
          <button className="admin-signout" onClick={signOut} title="Çıkış"><LogOut size={16} /></button>
        </div>
        <div className="sidebar-header">
          <span>Yazılar ({posts.length})</span>
          <button className="btn-icon" onClick={cancelEdit} title="Yeni yazı"><Plus size={16} /></button>
        </div>
        <ul className="post-list">
          {posts.map(p => (
            <li key={p.id} className={`post-list-item ${editId === p.id ? 'active' : ''}`}>
              <span className="post-list-title">{p.title}</span>
              <div className="post-list-actions">
                <button onClick={() => startEdit(p)} title="Düzenle"><Pencil size={13} /></button>
                <button onClick={() => handleDelete(p.id)} title="Sil" className="danger"><Trash2 size={13} /></button>
              </div>
            </li>
          ))}
          {posts.length === 0 && <li className="post-list-empty">Henüz yazı yok</li>}
        </ul>
      </aside>

      <main className="admin-main">
        <div className="admin-form-header">
          <h2>{editId ? 'Yazıyı Düzenle' : 'Yeni Yazı'}</h2>
          {editId && <button className="btn-ghost" onClick={cancelEdit}><X size={16} /> İptal</button>}
        </div>

        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-row">
            <div className="field">
              <label>Başlık *</label>
              <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="Yazı başlığı" required />
            </div>
            <div className="field field-sm">
              <label>Okuma Süresi</label>
              <input value={form.read_time} onChange={e => setForm(f => ({ ...f, read_time: e.target.value }))} placeholder="5 dk" />
            </div>
          </div>

          <div className="form-row">
            <div className="field">
              <label>Yazar Adı</label>
              <input value={form.author_name} onChange={e => setForm(f => ({ ...f, author_name: e.target.value }))} placeholder="Ad Soyad" />
            </div>
            <div className="field field-sm">
              <label>Avatar (2 harf)</label>
              <input value={form.author_avatar} onChange={e => setForm(f => ({ ...f, author_avatar: e.target.value.slice(0, 2).toUpperCase() }))} placeholder="AY" maxLength={2} />
            </div>
            <div className="field field-sm">
              <label>Kategori</label>
              <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}>
                {cats.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
              </select>
            </div>
          </div>

          <div className="field">
            <label>Özet</label>
            <textarea rows={2} value={form.excerpt} onChange={e => setForm(f => ({ ...f, excerpt: e.target.value }))} placeholder="Yazının kısa özeti..." />
          </div>

          <div className="field">
            <label>Kapak Görseli</label>
            <div className="image-input-row">
              <input value={form.image_url} onChange={e => setForm(f => ({ ...f, image_url: e.target.value }))} placeholder="https://... ya da aşağıdan yükle" />
              <button type="button" className="btn-upload" onClick={() => fileRef.current.click()} disabled={uploading}>
                <Upload size={14} /> {uploading ? 'Yükleniyor...' : 'Yükle'}
              </button>
              <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageUpload} />
            </div>
            {form.image_url && <img src={form.image_url} alt="önizleme" className="image-preview" />}
          </div>

          <div className="field">
            <label>İçerik (Markdown)</label>
            <textarea
              rows={16}
              className="content-editor"
              value={form.content}
              onChange={e => setForm(f => ({ ...f, content: e.target.value }))}
              placeholder="## Başlık&#10;&#10;İçeriğinizi **Markdown** formatında yazın..."
            />
          </div>

          <div className="form-footer">
            <label className="checkbox-label">
              <input type="checkbox" checked={form.featured} onChange={e => setForm(f => ({ ...f, featured: e.target.checked }))} />
              Öne çıkan yazı
            </label>
            <button type="submit" className="btn-primary" disabled={loading}>
              {saved ? <><Check size={16} /> Kaydedildi!</> : loading ? 'Kaydediliyor...' : editId ? 'Güncelle' : 'Yayımla'}
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}
