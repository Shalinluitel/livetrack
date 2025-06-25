import Link from 'next/link';

export default function Transactions() {
  return (
    <main style={{ minHeight: '100vh', background: '#0F172A', color: '#fff', padding: '32px' }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24 }}>Transactions</h1>
      <div style={{ color: '#94A3B8', fontSize: 18, marginBottom: 48 }}>Your transactions will appear here soon.</div>
      <NavBar active="Transactions" />
    </main>
  );
}

function NavBar({ active }) {
  const navs = [
    { label: 'Dashboard', href: '/' },
    { label: 'Transactions', href: '/transactions' },
    { label: 'Income Setup', href: '/income-setup' },
    { label: 'Investments', href: '/investments' },
    { label: 'Settings', href: '/settings' },
  ];
  return (
    <nav style={{ position: 'fixed', left: 16, right: 16, bottom: 16, background: '#1E293B', borderRadius: 20, boxShadow: '0 4px 8px rgba(0,0,0,0.15)', display: 'flex', justifyContent: 'space-around', padding: '12px 32px', zIndex: 100 }}>
      {navs.map(({ label, href }) => (
        <Link key={label} href={href} style={{ textDecoration: 'none' }}>
          <div style={{
            padding: 12,
            borderRadius: 12,
            color: active === label ? '#0F172A' : '#94A3B8',
            background: active === label ? '#4ADE80' : 'transparent',
            fontWeight: 500,
            fontSize: 16,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          className="nav-item"
          >
            {label}
          </div>
        </Link>
      ))}
      <style jsx>{`
        .nav-item:hover {
          background: #4ADE80 !important;
          color: #0F172A !important;
        }
      `}</style>
    </nav>
  );
} 