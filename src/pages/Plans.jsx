import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Plans.css';

export default function Plans() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState('boundary');

  useEffect(() => {
    fetch('/data/plans-2026.json')
      .then(res => res.json())
      .then(json => { setData(json); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div style={{ textAlign: 'center', padding: '60px', color: '#78716C' }}>加载中…</div>;
  if (!data) return <div style={{ textAlign: 'center', padding: '60px', color: '#78716C' }}>数据加载失败</div>;

  return (
    <>
      <header className="page-header">
        <div className="page-header-inner">
          <nav className="breadcrumb" aria-label="面包屑">
            <Link to="/">首页</Link>
            <span className="breadcrumb-sep">/</span>
            <span>2026年履职计划</span>
          </nav>
          <h1>2026年履职计划</h1>
          <p>各界别履职活动安排与各街道"民生议事堂"议事计划</p>
        </div>
      </header>

      <div className="plans-container">
        {/* Tab Switcher */}
        <div className="plans-tabs">
          <button className={`plans-tab ${tab === 'boundary' ? 'active' : ''}`} onClick={() => setTab('boundary')}>
            界别履职计划
          </button>
          <button className={`plans-tab ${tab === 'council' ? 'active' : ''}`} onClick={() => setTab('council')}>
            民生议事堂计划
          </button>
        </div>

        {tab === 'boundary' ? (
          <div className="plans-grid">
            {data.boundaryPlans.map((b, i) => (
              <div key={i} className="plans-card">
                <div className="plans-card-header">
                  <h3>{b.boundary}</h3>
                  <span className="plans-count">{b.plans.length}项活动</span>
                </div>
                <div className="plans-list">
                  {b.plans.map((p, j) => (
                    <div key={j} className="plans-item">
                      <span className="plans-item-time">{p.time}</span>
                      <div className="plans-item-body">
                        <span className="plans-item-name">{p.name}</span>
                        <span className="plans-item-type">{p.type}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="plans-grid">
            {data.councilPlans.map((c, i) => (
              <div key={i} className="plans-card">
                <div className="plans-card-header">
                  <h3>{c.street}</h3>
                  <span className="plans-count">{c.plans.length}次协商</span>
                </div>
                <div className="plans-list">
                  {c.plans.map((p, j) => (
                    <div key={j} className="plans-item">
                      <span className="plans-item-time">{p.time}</span>
                      <div className="plans-item-body">
                        <span className="plans-item-name">{p.topic}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Back */}
        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <Link to="/studios" className="plans-back-btn">
            返回履职平台
          </Link>
        </div>
      </div>
    </>
  );
}
