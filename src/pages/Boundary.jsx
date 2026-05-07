import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Boundary.css';

const BOUNDARY_ICONS = {
  '中共': '🔴', '无党派': '🔷', '共青团、青联': '🌟', '工会': '⚒',
  '妇联': '🌸', '工商联': '💼', '科技、科协': '🔬', '侨、台': '🌏',
  '新闻文体': '📰', '经济': '📊', '环境资源和农业': '🌿', '教育': '📚',
  '医卫': '🏥', '社会福利和保障': '🤝', '民宗': '🙏', '特邀': '⭐',
};

const BOUNDARY_COLORS = [
  '#B91C1C', '#1D4ED8', '#7C3AED', '#EA580C',
  '#DB2777', '#0D9488', '#15803D', '#A16207',
  '#6D28D9', '#0369A1', '#4D7C0F', '#BE185D',
  '#0F766E', '#9333EA', '#C2410C', '#1E40AF',
];

export default function Boundary() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/boundaries.json')
      .then(res => res.json())
      .then(json => { setData(json); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div style={{ textAlign: 'center', padding: '60px', color: '#78716C' }}>加载中…</div>;
  if (!data) return <div style={{ textAlign: 'center', padding: '60px', color: '#78716C' }}>数据加载失败</div>;

  const { boundaries } = data;

  return (
    <>
      <header className="page-header">
        <div className="page-header-inner">
          <nav className="breadcrumb" aria-label="面包屑">
            <Link to="/">首页</Link>
            <span className="breadcrumb-sep">/</span>
            <span>界别基本情况</span>
          </nav>
          <h1>界别基本情况</h1>
          <p>上城区政协设16个界别，积极开展各类履职活动</p>
        </div>
      </header>

      <div className="boundary-container">
        {/* Overview */}
        <div className="boundary-overview">
          {data.description}
        </div>

        {/* Boundary Grid */}
        <div className="boundary-grid">
          {boundaries.map((b, idx) => {
            const color = BOUNDARY_COLORS[idx % BOUNDARY_COLORS.length];
            const icon = BOUNDARY_ICONS[b.name] || '📋';
            return (
              <article key={b.id} className="boundary-card">
                {/* Header */}
                <div className="boundary-card-header">
                  <span className="boundary-icon" style={{ background: `linear-gradient(135deg, ${color}22, ${color}11)` }}>
                    {icon}
                  </span>
                  <div>
                    <h3 className="boundary-card-title">{b.name}界别</h3>
                    <span className="boundary-card-count">{b.count}张活动照片</span>
                  </div>
                  <span className="boundary-card-badge" style={{ background: `${color}18`, color }}>
                    No.{b.id}
                  </span>
                </div>

                {/* Image Grid */}
                <div className={`boundary-img-grid ${b.count <= 1 ? 'cols-1' : b.count === 2 ? 'cols-2' : 'cols-auto'}`}>
                  {b.images.map((img, i) => (
                    <div key={i} className={`boundary-img-wrap ${b.count === 1 ? 'single' : ''}`}>
                      <img
                        src={img.img}
                        alt={img.desc}
                        loading="lazy"
                        onError={e => { e.target.style.display = 'none'; }}
                      />
                      <div className="boundary-img-desc">{img.desc}</div>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Back */}
        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <Link to="/studios" className="boundary-back-btn">
            返回履职平台
          </Link>
        </div>
      </div>
    </>
  );
}
