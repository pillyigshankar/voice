import { FiBell, FiMenu, FiSearch } from 'react-icons/fi'

export default function Navbar({ onMenu, demoMode, onToggleDemo }) {
  return (
    <header className="top-navbar">
      <button className="icon-btn only-mobile" onClick={onMenu} aria-label="Open navigation">
        <FiMenu />
      </button>

      <label className="search-box" htmlFor="global-search">
        <FiSearch />
        <input id="global-search" type="search" placeholder="Search" aria-label="Search" />
      </label>

      <div className="nav-right">
        <button className="icon-btn" aria-label="Notifications">
          <FiBell />
        </button>
        <div className="toggle-chip">
          <span>Research Demo</span>
          <button className={`switch ${demoMode ? 'on' : ''}`} onClick={onToggleDemo} aria-label="Toggle research demo mode">
            <span />
          </button>
        </div>
        <div className="profile-box">
          <p>Research Prototype</p>
          <small>G. Shankar · B.Tech CSE</small>
        </div>
      </div>
    </header>
  )
}
