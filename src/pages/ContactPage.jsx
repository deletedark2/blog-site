import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="static-page">
      <div className="static-page-inner">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} /> Geri Dön
        </Link>

        <div className="static-emoji">📬</div>
        <h1>İletişim</h1>

        <blockquote className="static-quote">"Babanız burda, DM'den ulaşabilirsiniz."</blockquote>

        <div className="contact-card">
          <a
            href="https://www.instagram.com/cngzsukru/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
          >
            <div className="instagram-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </div>
            <div className="instagram-info">
              <span className="instagram-label">Instagram</span>
              <span className="instagram-handle">@cngzsukru</span>
            </div>
            <ExternalLink size={18} className="instagram-arrow" />
          </a>
        </div>
      </div>
    </div>
  )
}
