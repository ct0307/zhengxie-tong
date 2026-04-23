import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';

const NAV_ITEMS = [
  { path: '/', label: '首页' },
  { path: '/studios', label: '履职平台' },
  { path: '/about', label: '委员之家' },
  { path: '/gallery', label: '履职风采' },
];

export default function Layout({ children }) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        跳转到主要内容
      </a>

      <nav className={`nav ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="主导航">
        <div className="nav-inner">
          <Link to="/" className="nav-brand" aria-label="首页">
            <svg className="nav-logo" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
              role="img" aria-hidden="true">
              <rect width="40" height="40" rx="10" fill="#B91C1C"/>
              <path d="M8 28V12h4.5l4 10 4-10H25v16h-4V17l-3.5 9H14l-3.5-9v11H8z" fill="white"/>
              <path d="M27 12l5 8-5 8m0-16l-5 8 5 8" stroke="#A16207" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="brand-text">
              <span className="brand-name">政协委员通</span>
              <span className="brand-sub">上城区 · 履职平台</span>
            </div>
          </Link>

          <div className="nav-links" role="menubar">
            {NAV_ITEMS.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                role="menuitem"
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            className={`nav-toggle ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? '关闭菜单' : '打开菜单'}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`} role="menu" aria-label="移动端导航">
        {NAV_ITEMS.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <main id="main-content" className="main" role="main">
        {children}
      </main>

      <footer className="footer" role="contentinfo">
        <div className="footer-inner">
          <div className="footer-brand">
            <h3>政协委员工作室履职平台</h3>
            <p>
              上城区政协按照"向基层延伸覆盖"和"不建机构建机制"工作要求，
              强化委员工作室"三位一体"建设，以打造"一室一品"为特色。
            </p>
          </div>
          <div className="footer-col">
            <h4>平台导航</h4>
            <Link to="/">首页</Link>
            <Link to="/studios">履职平台</Link>
            <Link to="/about">委员之家</Link>
            <Link to="/gallery">履职风采</Link>
          </div>
          <div className="footer-col">
            <h4>工作室分类</h4>
            <Link to="/category/street">街道小组</Link>
            <Link to="/category/culture">宋韵文化</Link>
            <Link to="/category/community">社区服务</Link>
            <Link to="/category/professional">专业智库</Link>
          </div>
          <div className="footer-col">
            <h4>联系方式</h4>
            <span style={{ opacity: 0.7 }}>杭州市上城区</span>
            <span style={{ opacity: 0.7 }}>政协工作委员会</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 上城区政协 · 委员委员工作室履职平台</span>
          <span>党建引领 · 履职为民</span>
        </div>
      </footer>
    </>
  );
}
