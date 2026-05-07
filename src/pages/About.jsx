import { Link } from 'react-router-dom';
import studios from '../data/studios.json';
import './About.css';

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

const PLATFORM_INTRO = '上城区政协按照"向基层延伸覆盖"和"不建机构建机制"工作要求，坚持党建引领，强化委员工作室"三位一体"建设，牢牢把握功能定位，立足区域发展实际，以打造"一室一品"为特色，深化"楼宇商圈""宋韵文化"和"全龄特有爱"公益慈善品牌建设，着力构建宽领域、多层次、常态化的协商体系，不断提升委员工作室辨识度和影响力，密切与界别群众的联系，凝聚社会各界共识，助推区域经济高质量发展。';

const STAR_STUDIOS = [
  { name: '政协湖滨小组委员工作室', highlight: '搭建商圈"晴雨议事厅"，企业代表担任"轮值议事长"，领办商圈健康、金融、管理、教育、法律五大服务项目', leader: '查靖' },
  { name: '政协清波小组委员工作室', highlight: '创新"1+6+3"工作模式，依托"清波话坊"开展协商议事215场，服务群众2500余人次，获杭州市政协民生议事堂精品协商案例', leader: '徐洁' },
  { name: '政协紫阳小组委员工作室', highlight: '位于新中国首个居民委员会诞生地，搭建"传承民主基因、擦亮协商品牌"基层综合平台，被认定为协商民主实践基地', leader: '王盈' },
  { name: '政协四季青小组委员工作室', highlight: '多次获评五星级委员工作室，开展20余场专题协商活动，服务群众1580人次，新就业群体工作获中组部、中社部充分肯定', leader: '李岗' },
  { name: '采荷街道"幸福19"委员工作室', highlight: '构建"1+6+16+N"协商矩阵，创设"1731"民生议事工作法，围绕老旧小区改造、新就业群体权益保障等开展协商', leader: '赵丹晨' },
  { name: '政协彭埠小组委员工作室', highlight: '发挥罗家老宅全市首个协商民主实践中心区级分中心资源优势，深耕书香政协，举办读书活动20余次覆盖200余人次', leader: '任渊' },
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

      <div className="about-container">

        {/* Overview Card */}
        <div className="about-overview-card">
          <div className="about-overview-text">
            <h2>平台概述</h2>
            <p>{PLATFORM_INTRO}</p>
            <p style={{ marginTop: '12px', fontSize: '14px', color: 'var(--color-foreground-muted)' }}>
              目前，全区共有委员工作室<strong>{total}</strong>家，实现履职平台街道委员小组全覆盖。
              2025年度共认定五星级委员工作室<strong>{studios.statistics.star_ratings_2025.five_star}</strong>家，
              四星级委员工作室<strong>{studios.statistics.star_ratings_2025.four_star}</strong>家，
              三星级委员工作室<strong>{studios.statistics.star_ratings_2025.three_star}</strong>家。
            </p>
          </div>

          {/* Coverage Ring */}
          <div className="about-ring-wrap">
            <div className="about-ring">
              <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="80" cy="80" r="70" stroke="var(--color-border)" strokeWidth="12" fill="none"/>
                <circle cx="80" cy="80" r="70" stroke="var(--color-primary)" strokeWidth="12" fill="none"
                  strokeDasharray={`${2 * Math.PI * 70 * fiveStarPercent / 100} ${2 * Math.PI * 70}`}
                  strokeDashoffset={2 * Math.PI * 70 * 0.25}
                  strokeLinecap="round"
                />
              </svg>
              <div className="about-ring-label">
                <span className="about-ring-num">{fiveStarPercent}%</span>
                <span className="about-ring-text">五星工作室</span>
              </div>
            </div>
            <p className="about-ring-sub">2025年度评定结果</p>
          </div>
        </div>

        {/* Work Principles */}
        <section className="about-section">
          <h2 className="about-section-title">
            工作理念
            <span className="about-title-bar" />
          </h2>
          <div className="about-principles-grid">
            {PRINCIPLES.map((p, i) => (
              <div key={i} className="about-principle-card">
                <div className="about-principle-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Star Ratings */}
        <section className="about-section">
          <h2 className="about-section-title">
            2025年度星级评定
            <span className="about-title-bar" />
          </h2>
          <div className="about-star-card">
            {STAR_DATA.map((item, i) => (
              <div key={i} className="about-star-row">
                <span className="about-star-label" style={{ color: item.color }}>
                  {item.stars}工作室
                </span>
                <div className="about-star-bar-bg">
                  <div className="about-star-bar-fill" style={{
                    width: `${(item.count / total) * 100}%`,
                    background: `linear-gradient(90deg, ${item.color}, ${item.color}88)`,
                  }} />
                </div>
                <span className="about-star-num" style={{ color: item.color }}>{item.count}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Star Studio Highlights */}
        <section className="about-section">
          <h2 className="about-section-title">
            星级委员工作室风采
            <span className="about-title-bar" />
          </h2>
          <div className="about-star-studios-grid">
            {STAR_STUDIOS.map((s, i) => (
              <div key={i} className="about-star-studio-card">
                <div className="about-star-studio-header">
                  <h4>{s.name}</h4>
                  <span className="about-star-studio-leader">领衔：{s.leader}</span>
                </div>
                <p className="about-star-studio-desc">{s.highlight}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="about-cta">
          <Link to="/studios" className="about-cta-btn">
            浏览全部工作室
          </Link>
        </div>
      </div>
    </>
  );
}
