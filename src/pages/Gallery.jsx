import { Link } from 'react-router-dom';
import './StudioList.css';

const ACTIVITIES = [
  { category: '宋韵文化', color: '#A16207', bg: '#FEF3C7', studio: '俞富康宋韵文化委员工作室', title: '宋韵文化传承与创新专题活动', date: '2025年04月', img: null },
  { category: '社区服务', color: '#15803D', bg: '#DCFCE7', studio: '幸福邻里委员工作室', title: '"邻里守望"社区微治理交流活动', date: '2025年03月', img: null },
  { category: '大健康', color: '#0D9488', bg: '#CCFBF1', studio: '大健康委员工作室', title: '健康义诊进社区专项活动', date: '2025年03月', img: null },
  { category: '公益慈善', color: '#BE185D', bg: '#FCE7F3', studio: '爱馨文化公益委员工作室', title: '"特有爱"公益文化艺术展演', date: '2025年02月', img: null },
  { category: '协商民主', color: '#7C3AED', bg: '#F3E8FF', studio: '"老爸好商量"委员工作室', title: '老城厢更新改造协商民主座谈会', date: '2025年02月', img: null },
  { category: '非遗文化', color: '#1D4ED8', bg: '#DBEAFE', studio: '非遗委员工作室', title: '非物质文化遗产技艺传承活动', date: '2025年01月', img: null },
  { category: '教育', color: '#EA580C', bg: '#FFEDD5', studio: '"育共体 阳光行"委员工作室', title: '家校社协同育人研讨交流活动', date: '2025年01月', img: null },
  { category: '侨务', color: '#15803D', bg: '#DCFCE7', studio: '侨见未来委员工作室', title: '侨界委员履职经验分享会', date: '2024年12月', img: null },
];

export default function Gallery() {
  return (
    <>
      <header className="page-header">
        <div className="page-header-inner">
          <nav className="breadcrumb" aria-label="面包屑">
            <Link to="/">首页</Link>
            <span className="breadcrumb-sep">/</span>
            <span>履职风采</span>
          </nav>
          <h1>履职风采</h1>
          <p>记录各委员工作室积极履职、服务群众的精彩瞬间</p>
        </div>
      </header>

      <div style={{ maxWidth: 'var(--max-width)', margin: 'auto', padding: 'var(--space-12) var(--space-6) var(--space-20)' }}>

        {/* Gallery Grid - Masonry-like layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 'var(--space-5)',
        }}>
          {ACTIVITIES.map((act, i) => (
            <article key={i} style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              transition: 'transform var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast)'
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              {/* Image Placeholder */}
              <div style={{
                height: i % 3 === 0 ? '220px' : '180px',
                background: `linear-gradient(135deg, ${act.bg}, ${act.bg}88)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: '64px', height: '64px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'rgba(255,255,255,0.6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '28px',
                  backdropFilter: 'blur(4px)'
                }}>
                  {i % 8 === 0 ? '🎭' : i % 8 === 1 ? '🤝' : i % 8 === 2 ? '🏥' : i % 8 === 3 ? '🌸' : i % 8 === 4 ? '🗣' : i % 8 === 5 ? '🎨' : i % 8 === 6 ? '📚' : '🌍'}
                </div>
                <div style={{
                  position: 'absolute',
                  top: 'var(--space-3)',
                  right: 'var(--space-3)',
                  background: 'rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(4px)',
                  borderRadius: 'var(--radius-full)',
                  padding: '2px 10px',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600,
                  color: act.color
                }}>
                  {act.category}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: 'var(--space-5)' }}>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-subtle)', marginBottom: 'var(--space-2)' }}>
                  {act.studio}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: 'var(--text-base)',
                  lineHeight: 1.45,
                  marginBottom: 'var(--space-4)',
                  color: 'var(--color-foreground)'
                }}>
                  {act.title}
                </h3>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-subtle)'
                }}>
                  <span>{act.date}</span>
                  <span style={{ color: act.color, fontWeight: 600 }}>查看详情 →</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 'var(--space-12)', textAlign: 'center' }}>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-subtle)', marginBottom: 'var(--space-6)' }}>
            更多精彩活动持续更新中…
          </p>
          <Link to="/studios" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: 'var(--space-3) var(--space-8)',
            background: 'linear-gradient(135deg, var(--color-primary), #991B1B)',
            color: 'white', fontWeight: 600, fontSize: 'var(--text-base)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 4px 16px oklch(0.55 0.18 25 / 0.35)',
          }}>
            探索委员工作室
          </Link>
        </div>
      </div>
    </>
  );
}
