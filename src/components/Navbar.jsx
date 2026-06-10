import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Feather } from 'lucide-react';

const links = [
  { label: 'Anasayfa', to: '/' },
  { label: 'Babanız', to: '/babaniz' },
  { label: 'Burda', to: '/burda' },
  { label: 'Ayık', to: '/ayik' },
  { label: 'Olun', to: '/olun' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand">
          <Feather size={22} />
          <span>BlogSite</span>
        </Link>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <a href="#newsletter" className="btn-nav" onClick={() => setOpen(false)}>
            Abone Ol
          </a>
        </nav>

        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Menü">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
