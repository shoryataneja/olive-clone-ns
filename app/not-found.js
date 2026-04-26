import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="page-box" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', gap: '16px', textAlign: 'center', padding: '40px' }}>
      <span style={{ fontSize: '64px' }}>🫒</span>
      <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '48px', color: '#2C3B1F' }}>404</h1>
      <p style={{ color: '#6B7B6B', fontSize: '16px' }}>This page doesn&apos;t exist.</p>
      <Link href="/" className="btn-primary" style={{ marginTop: '8px' }}>Go Home</Link>
    </div>
  );
}
