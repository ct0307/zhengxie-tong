import { Link } from 'react-router-dom';
import './StudioList.css';

const ACTIVITIES = [
  { category: '协商民主', color: '#7C3AED', bg: '#F3E8FF', studio: '新时代协商民主实践中心', title: '市政协矩阵建设座谈会在上城区分中心召开', date: '2025年04月', img: '/images/gallery/gallery-1.webp' },
  { category: '党建联建', color: '#B91C1C', bg: '#FEE2E2', studio: '彭埠分中心', title: '市区街三级政协党建联建工作会议召开', date: '2025年03月', img: '/images/gallery/gallery-2.webp' },
  { category: '民生议事', color: '#15803D', bg: '#DCFCE7', studio: '彭埠街道委员小组', title: '"圆梦安居·助力街道回迁安置"民生议事堂', date: '2025年03月', img: '/images/gallery/gallery-3.webp' },
  { category: '非遗文化', color: '#1D4ED8', bg: '#DBEAFE', studio: '彭埠街道委员小组', title: '委员小组开展非遗体验活动', date: '2025年02月', img: '/images/gallery/gallery-4.webp' },
  { category: '教育', color: '#EA580C', bg: '#FFEDD5', studio: '彭埠分中心联盟单位', title: '夏衍小学开展棋类比赛', date: '2025年02月', img: '/images/gallery/gallery-5.webp' },
  { category: '界别活动', color: '#A16207', bg: '#FEF3C7', studio: '妇联界别', title: '妇联界别举办国学文化品鉴暨界别调研总结会', date: '2025年01月', img: '/images/gallery/gallery-6.webp' },
  { category: '大健康', color: '#0D9488', bg: '#CCFBF1', studio: '多界别联合', title: '中医养生专题讲座及义诊服务活动', date: '2025年01月', img: '/images/gallery/gallery-7.webp' },
  { category: '商圈建设', color: '#7C3AED', bg: '#F3E8FF', studio: '湖滨街道委员小组', title: '"助推商圈社区建设"民生议事堂活动', date: '2024年12月', img: '/images/gallery/gallery-8.webp' },
  { category: '调研考察', color: '#B91C1C', bg: '#FEE2E2', studio: '紫阳分中心', title: '区政协孙国方主席赴紫阳分中心调研', date: '2024年12月', img: '/images/gallery/gallery-9.webp' },
  { category: '调研考察', color: '#1D4ED8', bg: '#DBEAFE', studio: '紫阳分中心', title: '市政协吴玉凤副秘书长调研分中心建设工作', date: '2024年11月', img: '/images/gallery/gallery-10.webp' },
  { category: '社区治理', color: '#15803D', bg: '#DCFCE7', studio: '紫阳上羊实践点', title: '"推动邻里食堂智能化"专题协商会', date: '2024年11月', img: '/images/gallery/gallery-11.webp' },
  { category: '物业协商', color: '#0D9488', bg: '#CCFBF1', studio: '清波街道委员小组', title: '老旧小区物业服务"质价双提"议事协商', date: '2024年10月', img: '/images/gallery/gallery-12.webp' },
  { category: '文化交流', color: '#A16207', bg: '#FEF3C7', studio: '小营街道委员小组', title: '"遇见东坡"文化交流活动', date: '2024年10月', img: '/images/gallery/gallery-13.webp' },
  { category: '民主监督', color: '#EA580C', bg: '#FFEDD5', studio: '望江街道委员小组', title: '"普及全民金融知识·增强百姓防诈意识"专题协商', date: '2024年09月', img: '/images/gallery/gallery-14.webp' },
  { category: '读书会', color: '#7C3AED', bg: '#F3E8FF', studio: '南星街道委员小组', title: '"赓续历史之文脉·建言服务为民生"冬季读书会', date: '2024年09月', img: '/images/gallery/gallery-15.webp' },
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
              {/* Image Area */}
              <div style={{
                height: i % 3 === 0 ? '220px' : '180px',
                background: `linear-gradient(135deg, ${act.bg}, ${act.bg}88)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {act.img ? (
                  <img
                    src={act.img}
                    alt={act.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                  />
                ) : (
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
                )}
                <div style={{
                  position: 'absolute',
                  top: 'var(--space-3)',
                  right: 'var(--space-3)',
                  background: 'rgba(255,255,255,0.85)',
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
