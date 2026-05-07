import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './PracticeCenter.css';

export default function PracticeCenter() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('pengbu');

  useEffect(() => {
    fetch('/data/practice-center.json')
      .then(res => res.json())
      .then(json => { setData(json); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div style={{ textAlign: 'center', padding: '60px', color: '#78716C' }}>加载中…</div>;
  if (!data) return <div style={{ textAlign: 'center', padding: '60px', color: '#78716C' }}>数据加载失败</div>;

  const center = data.centers.find(c => c.id === activeTab) || data.centers[0];

  return (
    <>
      <header className="page-header">
        <div className="page-header-inner">
          <nav className="breadcrumb" aria-label="面包屑">
            <Link to="/">首页</Link>
            <span className="breadcrumb-sep">/</span>
            <span>协商民主实践中心</span>
          </nav>
          <h1>{data.title}</h1>
          <p>{data.subtitle} — 一中心一主题、多站点互联动</p>
        </div>
      </header>

      <div className="pc-container">
        {/* Tab Switcher */}
        <div className="pc-tabs">
          {data.centers.map(c => (
            <button
              key={c.id}
              className={`pc-tab ${activeTab === c.id ? 'active' : ''}`}
              onClick={() => setActiveTab(c.id)}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Center Info Card */}
        <div className="pc-info-card">
          <div className="pc-info-img">
            <img src={center.image} alt={center.fullName} />
          </div>
          <div className="pc-info-body">
            <h2>{center.fullName}</h2>
            <div className="pc-info-meta">
              <span>📍 {center.location}</span>
              <span>📅 成立于 {center.established}</span>
              <span>🏛 布局：{center.layout}</span>
            </div>
            <p className="pc-info-desc">{center.description}</p>
            <div className="pc-honors">
              <h4>荣誉与特色</h4>
              <div className="pc-honor-tags">
                {center.honors.map((h, i) => (
                  <span key={i} className="pc-honor-tag">{h}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Plan */}
        <div className="pc-plan-section">
          <h3>2026年度活动计划</h3>
          <div className="pc-plan-grid">
            {center.monthlyPlan.map((item, i) => (
              <div key={i} className="pc-plan-item">
                <div className="pc-plan-month">{item.month}</div>
                <div className="pc-plan-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back */}
        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <Link to="/gallery" className="pc-back-btn">
            查看履职风采
          </Link>
        </div>
      </div>
    </>
  );
}
