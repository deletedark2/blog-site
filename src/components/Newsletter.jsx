import { useState } from 'react'
import { Mail, CheckCircle } from 'lucide-react'
import { supabase } from '../lib/supabase'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    if (supabase) {
      await supabase.from('subscribers').upsert([{ email }], { onConflict: 'email' })
    }
    setDone(true)
    setLoading(false)
  }

  return (
    <section id="newsletter" className="newsletter">
      <div className="newsletter-inner">
        <Mail size={36} className="newsletter-icon" />
        <h2>Haftalık Bülten</h2>
        <p>Her hafta en iyi yazıları ve teknoloji haberlerini doğrudan gelen kutunuza göndereceğiz.</p>

        {done ? (
          <div className="newsletter-success">
            <CheckCircle size={20} />
            <span>Abone oldunuz! Teşekkürler.</span>
          </div>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="E-posta adresiniz"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? 'Kaydediliyor...' : 'Abone Ol'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
