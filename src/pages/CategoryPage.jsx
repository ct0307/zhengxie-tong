import { useParams, Link } from 'react-router-dom';
import studios from '../data/studios.json';
import './StudioList.css';

const CATEGORY_MAP = {
  street: { label: '街道小组', key: '街道小组', desc: '覆盖全区各街道的政协委员小组工作室' },
  culture: { label: '宋韵文化', key: '文化', desc: '以宋韵文化为主线的文化类委员工作室' },
  community: { label: '社区服务', key: '社区', desc: '深入社区基层服务的委员工作室' },
  professional: { label: '专业智库', key: '专业', desc: '汇聚各领域专业人才的智库型工作室' },
  health: { label: '大健康', key: '健康', desc: '聚焦全民健康服务的委员工作室' },
  public: { label: '公益慈善', key: '公益', desc: '致力公益慈善事业的委员工作室' },
  boundary: { label: '界别委员', key: '界别', desc: '各界别政协委员专属工作室' },
};

export default function CategoryPage() {
  const { type } = useParams();
  const cat = CATEGORY_MAP[type] || { label: type, key: type, desc: '' };
  const filtered = studios.studios.filter(s => s.category === cat.key);

  return (
    <>
      <header className="page-header">
        <div className="page-header-inner">
          <nav className="breadcrumb" aria-label="面包屑">
            <Link to="/">首页</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/studios">履职平台</Link>
            <span className="breadcrumb-sep">/</span>
            <span>{cat.label}</span>
          </nav>
          <h1>{cat.label}</h1>
          <p>{cat.desc}，共 {filtered.length} 个工作室</p>
        </div>
      </header>

      <div style={{ maxWidth: 'var(--max-width)', margin: 'auto', padding: 'var(--space-10) var(--space-6) var(--space-20)' }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 'var(--space-20)', color: 'var(--color-subtle)' }}>
            <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-4)' }}>暂无数据</h3>
            <Link to="/studios" style={{ color: 'var(--color-primary)' }}>返回全部工作室</Link>
          </div>
        ) : (
          <div className="studios-grid">
            {filtered.map(studio => (
              <Link key={studio.id} to={`/studios/${studio.id}`} className="scard">
                <div className="scard-top">
                  <div className="scard-number">{studio.id}</div>
                  <h3>{studio.name}</h3>
                  <div className="scard-leader">负责人：{studio.leader}</div>
                </div>
                <div className="scard-bottom">
                  <span style={{ maxWidth: '75%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {studio.address.length > 20 ? studio.address.slice(0, 20) + '…' : studio.address}
                  </span>
                  <span className="view-all-link">详情 →</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
