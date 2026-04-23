import { Link } from 'react-router-dom';
import studios from '../data/studios.json';
import './Home.css';

const CATEGORIES = [
  { key: 'street', label: '街道小组', iconClass: 'cat-red', icon: '🏛', count: '14个' },
  { key: 'culture', label: '宋韵文化', iconClass: 'cat-gold', icon: '🎭', count: '8个' },
  { key: 'community', label: '社区服务', iconClass: 'cat-green', icon: '🏘', count: '8个' },
  { key: 'professional', label: '专业智库', iconClass: 'cat-blue', icon: '💡', count: '4个' },
  { key: 'health', label: '大健康', iconClass: 'cat-teal', icon: '🏥', count: '3个' },
  { key: 'public', label: '公益慈善', iconClass: 'cat-purple', icon: '🌱', count: '2个' },
  { key: 'boundary', label: '界别委员', iconClass: 'cat-orange', icon: '🤝', count: '5个' },
];

const TAG_MAP = {
  '街道小组': 'tag-street',
  '文化': 'tag-culture',
  '社区': 'tag-community',
  '专业': 'tag-pro',
  '健康': 'tag-health',
  '公益': 'tag-public',
};

function getTagClass(category) {
  return TAG_MAP[category] || 'tag-street';
}

const FEATURED_IDS = [19, 22, 26, 36, 44, 48];
const featuredStudios = studios.studios.filter(s => FEATURED_IDS.includes(s.id)).slice(0, 6);

export default function Home() {
  const stats = studios.statistics;

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero" aria-label="平台简介">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              上城区政协 · {new Date().getFullYear()} 履职平台
            </div>

            <h1>
              委员履职
              <br />
              <span className="highlight">尽在一室</span>
            </h1>

            <p className="hero-desc">
              {studios.overview.slice(0, 80)}……
            </p>

            <div className="hero-actions">
              <Link to="/studios" className="btn-primary">
                浏览全部工作室
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/about" className="btn-secondary">
                了解委员之家
              </Link>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-card-stack">
              <div className="hero-card hero-card-back" />
              <div className="hero-card hero-card-main">
                <div className="hero-card-icon" aria-hidden="true">🏛</div>
                <div className="hero-card-stat-num">50<span style={{fontSize: '1.2rem', fontWeight: 700, color: '#A16207'}}>+</span></div>
                <div className="hero-card-stat-label">委员工作室</div>
                <div className="hero-card-bar">
                  <div className="hero-card-bar-fill" />
                </div>
                <div style={{display:'flex', justifyContent:'space-between', marginTop:'8px', fontSize:'0.75rem', color:'#78716C'}}>
                  <span>五星工作室 25家</span>
                  <span>85%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="stats-bar" aria-label="平台数据">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">
              {stats.total_studios}
              <span className="stat-unit">家</span>
            </div>
            <div className="stat-label">委员工作室</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              {stats.star_ratings_2025.five_star}
              <span className="stat-unit">家</span>
            </div>
            <div className="stat-label">五星工作室</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              {stats.star_ratings_2025.four_star}
              <span className="stat-unit">家</span>
            </div>
            <div className="stat-label">四星工作室</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              14
              <span className="stat-unit">个</span>
            </div>
            <div className="stat-label">街道全覆盖</div>
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="section categories" aria-label="分类导航">
        <div className="container">
          <div className="section-header">
            <h2>七大板块 · 全面履职</h2>
            <p>涵盖街道小组、宋韵文化、社区服务、专业智库等多类型工作室</p>
          </div>
        </div>
        <div className="category-grid">
          {CATEGORIES.map(cat => (
            <Link
              key={cat.key}
              to={`/category/${cat.key}`}
              className="category-card"
              aria-label={`${cat.label}，共${cat.count}`}
            >
              <div className={`category-icon ${cat.iconClass}`} aria-hidden="true">
                <span role="img" aria-hidden="true">{cat.icon}</span>
              </div>
              <div className="category-name">{cat.label}</div>
              <div className="category-count">{cat.count}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Featured Studios ── */}
      <section className="section" aria-labelledby="featured-heading">
        <div className="container">
          <div className="section-header">
            <h2 id="featured-heading">特色工作室</h2>
            <p>汇聚宋韵文化、智慧健康、公益慈善等多元化品牌工作室</p>
          </div>
        </div>
        <div className="featured-grid">
          {featuredStudios.map(studio => (
            <article key={studio.id} className="studio-card">
              <div className="studio-card-header">
                <div className="studio-card-info">
                  <span className={`studio-card-tag ${getTagClass(studio.category)}`}>
                    {studio.category}
                  </span>
                  <h3>{studio.name}</h3>
                  <div className="studio-card-leader">
                    <div className="leader-avatar" aria-hidden="true">
                      {studio.leader.slice(0, 1)}
                    </div>
                    <span>负责人：{studio.leader}</span>
                  </div>
                </div>
              </div>
              <div className="studio-card-body">
                <div className="studio-card-address">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 8.5 4.5 8.5s4.5-5 4.5-8.5c0-2.5-2-4.5-4.5-4.5z" fill="currentColor" opacity="0.5"/>
                    <circle cx="8" cy="6" r="1.5" fill="currentColor"/>
                  </svg>
                  {studio.address.length > 28 ? studio.address.slice(0, 28) + '…' : studio.address}
                </div>
              </div>
              <div className="studio-card-footer">
                <Link to={`/studios/${studio.id}`} className="studio-link">
                  查看详情
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <span style={{fontSize: 'var(--text-xs)', color: 'var(--color-subtle)'}}>No.{studio.id}</span>
              </div>
            </article>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}>
          <Link to="/studios" className="btn-primary">
            查看全部 {studios.studios.length} 个工作室
          </Link>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-banner" aria-label="行动引导">
        <div className="cta-inner">
          <h2>党建引领 · 履职为民</h2>
          <p>深化"楼宇商圈""宋韵文化"和"全龄特有爱"公益慈善品牌建设</p>
          <Link to="/gallery" className="cta-btn">
            探索履职风采
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
