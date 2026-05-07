import { useParams, Link, useNavigate } from 'react-router-dom';
import studios from '../data/studios.json';
import './StudioList.css';

const TAG_MAP = {
  '街道小组': 'tag-street',
  '文化': 'tag-culture',
  '社区': 'tag-community',
  '专业': 'tag-pro',
  '健康': 'tag-health',
  '公益': 'tag-public',
};

export default function StudioDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const studio = studios.studios.find(s => s.id === Number(id));

  if (!studio) {
    return (
      <div style={{ padding: 'var(--space-20) var(--space-6)', textAlign: 'center' }}>
        <h2>工作室不存在</h2>
        <Link to="/studios" style={{ color: 'var(--color-primary)' }}>返回列表</Link>
      </div>
    );
  }

  const prevStudio = studios.studios.find(s => s.id === studio.id - 1);
  const nextStudio = studios.studios.find(s => s.id === studio.id + 1);

  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <div className="page-header-inner">
          <nav className="breadcrumb" aria-label="面包屑">
            <Link to="/">首页</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/studios">履职平台</Link>
            <span className="breadcrumb-sep">/</span>
            <span>工作室详情</span>
          </nav>
          <h1>{studio.name}</h1>
        </div>
      </header>

      {/* Detail Content */}
      <div style={{ maxWidth: 'var(--max-width)', margin: 'auto', padding: 'var(--space-10) var(--space-6) var(--space-20)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 'var(--space-8)' }}>

          {/* Main */}
          <div>
            {/* 活动图片 */}
            {studio.image && (
              <div style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                marginBottom: 'var(--space-6)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-md)'
              }}>
                <img
                  src={studio.image}
                  alt={`${studio.name}活动图片`}
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>
            )}

            <div style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-8)',
              marginBottom: 'var(--space-6)'
            }}>
              <span className={`scard-category ${TAG_MAP[studio.category] || 'tag-street'}`} style={{ marginBottom: 'var(--space-4)', display: 'inline-block' }}>
                {studio.category}
              </span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-6)', lineHeight: 1.3 }}>
                {studio.name}
              </h2>

              <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
                  <span style={{ fontWeight: 600, color: 'var(--color-subtle)', minWidth: '70px', paddingTop: '2px', fontSize: 'var(--text-sm)' }}>负责人</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                    <div className="leader-avatar" style={{width:'36px', height:'36px', borderRadius:'50%', background:'linear-gradient(135deg,#B91C1C,#A16207)', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontSize:'14px', fontWeight:700, flexShrink:0}}>
                      {studio.leader.slice(0,1)}
                    </div>
                    <span style={{ fontWeight: 600, fontSize: 'var(--text-lg)' }}>{studio.leader}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
                  <span style={{ fontWeight: 600, color: 'var(--color-subtle)', minWidth: '70px', paddingTop: '2px', fontSize: 'var(--text-sm)' }}>工作室地址</span>
                  <span style={{ color: 'var(--color-foreground-muted)', lineHeight: 1.6 }}>{studio.address}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                  <span style={{ fontWeight: 600, color: 'var(--color-subtle)', minWidth: '70px', fontSize: 'var(--text-sm)' }}>编号</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 800, color: 'var(--color-primary)' }}>
                    No.{String(studio.id).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>

            {/* Activity Placeholder */}
            <div style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-8)'
            }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-6)' }}>
                工作室动态
              </h3>
              {[1,2,3].map(i => (
                <div key={i} style={{
                  padding: 'var(--space-4) 0',
                  borderBottom: i < 3 ? '1px solid var(--color-border)' : 'none',
                  display: 'flex',
                  gap: 'var(--space-4)',
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'var(--color-bg-alt)',
                    borderRadius: 'var(--radius-md)',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px'
                  }}>📋</div>
                  <div>
                    <div style={{ fontWeight: 500, marginBottom: 'var(--space-1)', fontSize: 'var(--text-sm)' }}>
                      {studio.name}开展第{i}次履职活动
                    </div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-subtle)' }}>
                      2025年0{i}月15日
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside>
            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              style={{
                width: '100%',
                padding: 'var(--space-3)',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                cursor: 'pointer',
                font: 'inherit',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--color-foreground)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-2)',
                marginBottom: 'var(--space-4)',
                transition: 'background-color var(--duration-fast)'
              }}
            >
              ← 返回列表
            </button>

            {/* Star Rating */}
            <div style={{
              background: 'linear-gradient(135deg, #FEF3C7, #FFFBF5)',
              border: '1px solid #FDE68A',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-6)',
              marginBottom: 'var(--space-4)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '28px', marginBottom: 'var(--space-2)' }}>⭐⭐⭐⭐⭐</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#A16207', fontSize: 'var(--text-lg)', marginBottom: 'var(--space-1)' }}>五星工作室</div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-subtle)' }}>2025年度评定结果</div>
            </div>

            {/* Navigation */}
            {prevStudio && (
              <Link to={`/studios/${prevStudio.id}`} style={{
                display: 'block',
                padding: 'var(--space-4)',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                marginBottom: 'var(--space-3)',
                fontSize: 'var(--text-sm)',
                color: 'var(--color-subtle)',
                transition: 'all var(--duration-fast)'
              }}>
                ← 上一个：{prevStudio.name.length > 16 ? prevStudio.name.slice(0, 16) + '…' : prevStudio.name}
              </Link>
            )}
            {nextStudio && (
              <Link to={`/studios/${nextStudio.id}`} style={{
                display: 'block',
                padding: 'var(--space-4)',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                fontSize: 'var(--text-sm)',
                color: 'var(--color-subtle)',
                transition: 'all var(--duration-fast)'
              }}>
                下一个：{nextStudio.name.length > 16 ? nextStudio.name.slice(0, 16) + '…' : nextStudio.name} →
              </Link>
            )}
          </aside>
        </div>
      </div>
    </>
  );
}
