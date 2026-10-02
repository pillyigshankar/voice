import {
  FiActivity,
  FiBarChart2,
  FiClock,
  FiDatabase,
  FiGrid,
  FiInfo,
  FiSettings,
} from 'react-icons/fi'

export const navigationRoutes = [
  { path: '/dashboard', label: 'Dashboard', icon: FiGrid },
  { path: '/analyze', label: 'Analyze Text', icon: FiActivity },
  { path: '/history', label: 'Analysis History', icon: FiClock },
  { path: '/dataset', label: 'Dataset', icon: FiDatabase },
  { path: '/model', label: 'Model', icon: FiBarChart2 },
  { path: '/about', label: 'About Project', icon: FiInfo },
  { path: '/settings', label: 'Settings', icon: FiSettings },
]
