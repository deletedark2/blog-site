import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Feather, LogIn } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'

export default function LoginPage() {
  const { session, signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  if (session) return <Navigate to="/admin" replace />

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const { error: err } = await signIn(email, password)
    if (err) setError('E-posta veya şifre hatalı.')
    setLoading(false)
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-brand">
          <Feather size={28} />
          <span>BlogSite Admin</span>
        </div>
        <h2>Giriş Yap</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="field">
            <label>E-posta</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="admin@site.com"
              required
            />
          </div>
          <div className="field">
            <label>Şifre</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="btn-primary" disabled={loading}>
            <LogIn size={16} />
            {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
          </button>
        </form>
      </div>
    </div>
  )
}
