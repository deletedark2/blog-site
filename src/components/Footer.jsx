import { Feather, Globe, Share2, Rss } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Feather size={20} />
          <span>BlogSite</span>
        </div>
        <p className="footer-copy">© 2026 BlogSite. Tüm hakları saklıdır.</p>
        <div className="footer-socials">
          <a href="#" aria-label="Web"><Globe size={18} /></a>
          <a href="#" aria-label="Paylaş"><Share2 size={18} /></a>
          <a href="#" aria-label="RSS"><Rss size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
