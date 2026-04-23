import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import studios from '../data/studios.json';
import './StudioList.css';

const CATEGORIES = [
  { key: 'all', label: '全部', count: 50 },
  { key: '街道小组', label: '街道小组', count: 14 },
  { key: '文化', label: '宋韵文化', count: 8 },
  { key: '社区', label: '社区服务', count: 8 },
  { key: '界别', label: '界别委员', count: 5 },
  { key: '专业', label: '专业智库', count: 4 },
  { key: '健康', label: '大健康', count: 3 },
  { key: '个人', label: '个人工作室', count: 4 },
  { key: '公益', label: '公益慈善', count: 2 },
  { key: '协商', label: '协商民主', count: 1 },
  { key: '教育', label: '教育', count: 1 },
];

const TAG_MAP = {
  '街道小组': 'tag-street',
  '文化': 'tag-culture',
  '社区': 'tag-community',
  '专业': 'tag-pro',
  '健康': 'tag-health',
  '公益': 'tag-public',
  '界别': 'tag-blue',
  '个人': 'tag-pro',
  '协商': 'tag-culture',
  '教育': 'tag-street',
};

export default function StudioList() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let list = studios.studios;
    if (activeCategory !== 'all') {
      list = list.filter(s => s.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(s =>
        s.name.toLowerCase().includes(q) ||
        s.leader.toLowerCase().includes(q) ||
        s.address.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeCategory, search]);

  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <div className="page-header-inner">
          <nav className="breadcrumb" aria-label="面包屑">
            <Link to="/">首页</Link>
            <span className="breadcrumb-sep" aria-hidden="true">/</span>
            <span>履职平台</span>
          </nav>
          <h1>委员工作室履职平台</h1>
          <p>汇聚上城区全部 {studios.statistics.total_studios} 个委员工作室，覆盖全区各街道</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="studios-layout">

        {/* Filter Sidebar */}
        <aside className="filter-sidebar" aria-label="筛选条件">
          <div className="filter-panel">
            <div className="filter-panel-header">
              <h3>筛选条件</h3>
              {activeCategory !== 'all' && (
                <button className="filter-reset" onClick={() => setActiveCategory('all')}>
                  重置
                </button>
              )}
            </div>

            <div className="filter-group">
              <div className="filter-group-label">工作室分类</div>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.key}
                  className={`filter-option ${activeCategory === cat.key ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.key)}
                  aria-pressed={activeCategory === cat.key}
                >
                  <span>{cat.label}</span>
                  <span className="filter-count">{cat.count}</span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Studio Grid */}
        <div className="studios-main">
          <div className="studios-toolbar">
            <div className="studios-count">
              共 <strong>{filtered.length}</strong> 个工作室
            </div>
            <div className="studios-search">
              <svg
                className="studios-search-icon"
                width="14" height="14"
                viewBox="0 0 16 16" fill="none"
                aria-hidden="true"
              >
                <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M10.5 10.5 14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <input
                type="search"
                placeholder="搜索工作室名称、负责人…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                aria-label="搜索工作室"
              />
            </div>
          </div>

          <div className="studios-grid" role="list">
            {filtered.length === 0 ? (
              <div className="empty-state" role="status">
                <h3>未找到相关工作室</h3>
                <p>请调整搜索条件后重试</p>
              </div>
            ) : (
              filtered.map(studio => (
                <Link
                  key={studio.id}
                  to={`/studios/${studio.id}`}
                  className="scard"
                  role="listitem"
                  aria-label={studio.name}
                >
                  <div className="scard-top">
                    <div className="scard-number">{studio.id}</div>
                    <span className={`scard-category ${TAG_MAP[studio.category] || 'tag-street'}`}>
                      {studio.category}
                    </span>
                    <h3>{studio.name}</h3>
                    <div className="scard-leader">负责人：{studio.leader}</div>
                  </div>
                  <div className="scard-bottom">
                    <span style={{ maxWidth: '75%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {studio.address.length > 20 ? studio.address.slice(0, 20) + '…' : studio.address}
                    </span>
                    <span className="view-all-link">
                      详情
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
