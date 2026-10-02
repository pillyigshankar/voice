import { NavLink } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'

export default function Sidebar({ routes, collapsed, onCollapse, mobileOpen, onClose }) {
  return (
    <>
      {mobileOpen && <button className="mobile-overlay" onClick={onClose} aria-label="Close menu" />}
      <aside className={`sidebar ${collapsed ? 'collapsed' : ''} ${mobileOpen ? 'open' : ''}`}>
        <div className="sidebar-top">
          <div>
            <h1 className="logo">CPAI</h1>
            {!collapsed && <p className="logo-sub">Culture Pragmatic AI</p>}
          </div>
          <button className="icon-btn close-mobile" onClick={onClose} aria-label="Close navigation">
            <FiX />
          </button>
        </div>

        <nav className="sidebar-nav" aria-label="Main">
          {routes.map(({ path, label, icon: Icon }) => (
            <NavLink key={path} to={path} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
              <Icon />
              {!collapsed && <span>{label}</span>}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <p>Research Prototype</p>
          <small>v1.0</small>
        </div>

        <button className="collapse-btn" onClick={onCollapse} aria-label="Toggle sidebar width">
          {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
        </button>
      </aside>
    </>
  )
}
