import { Link } from 'react-router-dom';
import studios from '../data/studios.json';
import './StudioList.css';

const PRINCIPLES = [
  { icon: '🏛', title: '向基层延伸', desc: '坚持"向基层延伸覆盖"，让委员工作室深入社区、街道各角落' },
  { icon: '🔧', title: '不建机构建机制', desc: '创新工作方式，通过机制建设而非增设机构推动履职实效' },
  { icon: '⭐', title: '三位一体建设', desc: '强化委员工作室"议事、服务、监督"三位一体功能定位' },
  { icon: '🎨', title: '一室一品特色', desc: '以打造"一室一品"为特色，形成各具特色的工作品牌' },
];

const STAR_DATA = [
  { stars: '五星', count: studios.statistics.star_ratings_2025.five_star, color: '#A16207' },
  { stars: '四星', count: studios.statistics.star_ratings_2025.four_star, color: '#78716C' },
  { stars: '三星', count: studios.statistics.star_ratings_2025.three_star, color: '#92400E' },
];

export default function About() {
  const total = studios.statistics.total_studios;
  const fiveStarPercent = Math.round((studios.statistics.star_ratings_2025.five_star / total) * 100);

  return (
    <>
      <header className="page-header">
        <div className="page-header-inner">
          <nav className="breadcrumb" aria-label="面包屑">
            <Link to="/">首页</Link>
            <span className="breadcrumb-sep">/</span>
            <span>委员之家</span>
          </nav>
          <h1>委员之家</h1>
          <p>上城区政协委员工作室履职平台建设概况与工作理念</p>
        </div>
      </header>

      <div style={{ maxWidth: 'var(--max-width)', margin: 'auto', padding: 'var(--space-12) var(--space-6) var(--space-20)' }}>

        {/* Overview Card */}
        <div style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-xl)',
          padding: 'var(--space-10)',
          marginBottom: 'var(--space-8)',
          display: 'grid',
          gridTemplateColumns: '1fr 300px',
          gap: 'var(--space-10)',
          alignItems: 'center'
        }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--color-foreground)' }}>
              平台概述
            </h2>
            <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--color-foreground-muted)', maxWidth: '65ch' }}>
              {studios.overview}
            </p>
          </div>

          {/* Coverage Ring */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ position: 'relative', width: '160px', height: '160px', margin: 'auto' }}>
              <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="80" cy="80" r="70" stroke="var(--color-border)" strokeWidth="12" fill="none"/>
                <circle cx="80" cy="80" r="70" stroke="var(--color-primary)" strokeWidth="12" fill="none"
                  strokeDasharray={`${2 * Math.PI * 70 * fiveStarPercent / 100} ${2 * Math.PI * 70}`}
                  strokeDashoffset={2 * Math.PI * 70 * 0.25}
                  strokeLinecap="round"
                  style={{ transition: 'stroke-dasharray 1s var(--ease-out)' }}
                />
              </svg>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--color-primary)', lineHeight: 1 }}>
                  {fiveStarPercent}%
                </span>
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-subtle)' }}>五星工作室</span>
              </div>
            </div>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-subtle)', marginTop: 'var(--space-3)' }}>
              2025年度评定结果
            </p>
          </div>
        </div>

        {/* Work Principles */}
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-6)' }}>
            工作理念
            <div style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg, var(--color-primary), var(--color-gold))', marginTop: '8px', borderRadius: '999px' }} />
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-5)' }}>
            {PRINCIPLES.map((p, i) => (
              <div key={i} style={{
                padding: 'var(--space-6)',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
              }}>
                <div style={{ fontSize: '28px', marginBottom: 'var(--space-3)' }}>{p.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: 'var(--space-2)', fontSize: 'var(--text-lg)' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-foreground-muted)', lineHeight: 'var(--leading-relaxed)' }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Star Ratings */}
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-6)' }}>
            2025年度星级评定
            <div style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg, var(--color-primary), var(--color-gold))', marginTop: '8px', borderRadius: '999px' }} />
          </h2>
          <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-8)' }}>
            {STAR_DATA.map((item, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 1fr 60px', alignItems: 'center', gap: 'var(--space-4)', marginBottom: i < STAR_DATA.length - 1 ? 'var(--space-5)' : 0 }}>
                <span style={{ fontWeight: 700, color: item.color, fontSize: 'var(--text-base)' }}>
                  {item.stars}工作室
                </span>
                <div style={{ height: '10px', background: 'var(--color-bg-alt)', borderRadius: '999px', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%',
                    width: `${(item.count / total) * 100}%`,
                    background: `linear-gradient(90deg, ${item.color}, ${item.color}88)`,
                    borderRadius: '999px',
                    transition: 'width 1s var(--ease-out)'
                  }} />
                </div>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-xl)', color: item.color, textAlign: 'right' }}>
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/studios" className="btn-primary" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: 'var(--space-3) var(--space-8)',
            background: 'linear-gradient(135deg, var(--color-primary), #991B1B)',
            color: 'white', fontWeight: 600, fontSize: 'var(--text-base)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 4px 16px oklch(0.55 0.18 25 / 0.35)',
            transition: 'all var(--duration-fast)'
          }}>
            浏览全部工作室
          </Link>
        </div>
      </div>
    </>
  );
}
