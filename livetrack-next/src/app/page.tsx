import styles from './page.module.css';

export default function Home() {
  // Sample data
  const sampleData = {
    assets: 0,
    liabilities: 0,
    monthlyIncome: 0,
    monthlySpending: 0,
    lastMonthSpending: 0,
    savingsGoal: 0.2, // 20%
    hourlyRate: 0,
    workStart: '09:00',
    workEnd: '17:00',
  };

  return (
    <main className={styles.main} style={{ minHeight: '100vh', background: '#0F172A', color: '#fff', padding: '32px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700 }}>Net Worth Dashboard</h1>
        <div style={{ display: 'flex', gap: 12 }}>
          <button style={{ background: '#4ADE80', color: '#0F172A', borderRadius: 12, fontWeight: 500, fontSize: 16, padding: '12px 32px', border: 'none', cursor: 'pointer' }}>+ Add Transaction</button>
          <button style={{ background: '#1E293B', color: '#fff', borderRadius: 12, fontWeight: 500, fontSize: 16, padding: '12px 32px', border: 'none', cursor: 'pointer' }}>View Reports</button>
        </div>
      </header>
      <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', marginBottom: 48 }}>
        <Card title="Net Worth" value={`$${sampleData.assets - sampleData.liabilities}`} sub="Assets - Liabilities" valueColor="#4ADE80" />
        <Card title="Real-Time Income" value="$0.00" sub="Earnings since 9:00 AM" valueColor="#FBBF24" />
        <Card title="Monthly Savings Rate" value="0%" sub="Goal: 20%" valueColor="#4ADE80" progress={0} />
        <Card title="Total Assets" value="$0" sub="Bank, Investments, Cash" valueColor="#4ADE80" />
        <Card title="Total Liabilities" value="$0" sub="Loans, Credit Cards" valueColor="#4ADE80" />
        <Card title="Spending This Month" value="$0" sub="Compared to last month: 0%" valueColor="#4ADE80" />
      </div>
      <nav style={{ position: 'fixed', left: 16, right: 16, bottom: 16, background: '#1E293B', borderRadius: 20, boxShadow: '0 4px 8px rgba(0,0,0,0.15)', display: 'flex', justifyContent: 'space-around', padding: '12px 32px', zIndex: 100 }}>
        <NavItem label="Dashboard" active />
        <NavItem label="Transactions" />
        <NavItem label="Income Setup" />
        <NavItem label="Investments" />
        <NavItem label="Settings" />
      </nav>
    </main>
  );
}

function Card({ title, value, sub, valueColor, progress }) {
  return (
    <div style={{ background: '#1E293B', borderRadius: 16, padding: 24, boxShadow: '0 4px 8px rgba(0,0,0,0.15)', display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ fontSize: 18, fontWeight: 600, color: '#94A3B8' }}>{title}</div>
      <div style={{ fontSize: 32, fontWeight: 700, color: valueColor }}>{value}</div>
      {typeof progress === 'number' && (
        <div style={{ width: '100%', height: 8, background: '#334155', borderRadius: 9999, overflow: 'hidden', marginTop: 4 }}>
          <div style={{ height: '100%', background: '#4ADE80', borderRadius: 9999, width: `${progress * 100}%`, transition: 'width 0.3s ease' }} />
        </div>
      )}
      <div style={{ fontSize: 14, color: '#64748B' }}>{sub}</div>
    </div>
  );
}

function NavItem({ label, active }) {
  return (
    <div style={{ padding: 12, borderRadius: 12, color: active ? '#0F172A' : '#94A3B8', background: active ? '#4ADE80' : 'transparent', fontWeight: 500, fontSize: 16, cursor: 'pointer', transition: 'all 0.2s' }}>
      {label}
    </div>
  );
}
