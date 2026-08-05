import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShoppingCart as CartIcon, Menu, Truck, Percent, ShieldCheck, X } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import ShoppingCartPanel from '@/components/ShoppingCart';

const NAV = [
  { to: '/', label: 'Inicio' },
  { to: '/productos', label: 'Productos' },
  { to: '/marcas', label: 'Marcas' },
  { to: '/combos', label: 'Combos' },
  { to: '/ofertas', label: 'Ofertas' },
  { to: '/blog', label: 'Blog' },
];

const Layout = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const count = cartItems.reduce((n, i) => n + i.quantity, 0);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="bg-primary text-primary-foreground text-xs sm:text-sm overflow-hidden">
        <div className="flex w-[200%] ticker">
          {[0, 1].map((k) => (
            <div key={k} className="flex w-1/2 shrink-0 items-center justify-around py-2 font-semibold uppercase tracking-wide">
              <span className="flex items-center gap-2"><Truck size={14} /> Envío gratis desde $200.000 COP</span>
              <span className="flex items-center gap-2"><Percent size={14} /> 15% OFF en tu primera compra: FUERZA15</span>
              <span className="flex items-center gap-2"><ShieldCheck size={14} /> 100% productos originales</span>
            </div>
          ))}
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-[90rem] items-center gap-4 px-4 py-4 sm:px-8">
          <Link to="/" className="font-display text-2xl font-extrabold leading-none">
            IRON<span className="text-primary">FUEL</span>
            <span className="block text-[10px] font-semibold tracking-[0.25em] text-muted-foreground">SUPLEMENTOS</span>
          </Link>
          <nav className="ml-auto hidden items-center gap-7 lg:flex">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `font-display text-base font-bold transition-colors ${isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'}`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative ml-auto flex h-11 min-w-[44px] items-center gap-2 rounded-sm bg-primary px-4 font-display font-bold text-primary-foreground transition active:scale-[0.98] lg:ml-0"
          >
            <CartIcon size={18} /> <span className="hidden sm:inline">Carrito</span>
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                {count}
              </span>
            )}
          </button>
          <button className="h-11 w-11 lg:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Menú">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-border px-4 pb-4 lg:hidden">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-border/60 py-3 font-display text-lg font-bold"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main key={location.pathname} className="flex-1">{children}</main>

      <footer className="border-t border-border bg-[#0a0a0a] text-sm text-muted-foreground">
        <div className="mx-auto grid max-w-[90rem] gap-8 px-4 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl font-extrabold text-foreground">IRON<span className="text-primary">FUEL</span></p>
            <p className="mt-3 max-w-xs">Suplementos deportivos originales de marcas establecidas. Distribuidor autorizado en Colombia.</p>
          </div>
          <div>
            <p className="font-display font-bold text-foreground">Tienda</p>
            <ul className="mt-3 space-y-2">
              {NAV.slice(1).map((n) => <li key={n.to}><Link to={n.to} className="hover:text-primary">{n.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="font-display font-bold text-foreground">Envíos y pagos</p>
            <ul className="mt-3 space-y-2">
              <li>Envío gratis desde $250.000 COP</li>
              <li>Entrega 24-72 h en ciudades principales</li>
              <li>Tarjeta de crédito y débito</li>
              <li>Transferencia bancaria y PSE</li>
            </ul>
          </div>
          <div>
            <p className="font-display font-bold text-foreground">Contacto</p>
            <ul className="mt-3 space-y-2">
              <li>WhatsApp: +57 300 123 4567</li>
              <li>hola@ironfuel.co</li>
              <li>Cra. 43A #1-50, Medellín</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border px-4 py-5 text-center text-xs sm:px-8 flex items-center justify-center gap-4">
          <span>© {new Date().getFullYear()} IronFuel Suplementos. Todos los derechos reservados.</span>
          <Link to="/admin" className="text-muted-foreground/50 hover:text-primary transition">Admin</Link>
        </div>
      </footer>

      <ShoppingCartPanel isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </div>
  );
};

export default Layout;
