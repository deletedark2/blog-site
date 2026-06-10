import { useState } from 'react';
import { Menu, X, Feather } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ['Anasayfa', 'Babanız', 'Burda', 'Ayık', 'Olun'];

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#" className="brand">
          <Feather size={22} />
          <span>BlogSite</span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <a key={l} href="#" onClick={() => setOpen(false)}>
              {l}
            </a>
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
