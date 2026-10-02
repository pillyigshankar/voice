import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Modal from './components/Modal'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import ToastStack from './components/ToastStack'
import About from './pages/About'
import Analyze from './pages/Analyze'
import Dashboard from './pages/Dashboard'
import Dataset from './pages/Dataset'
import History from './pages/History'
import Landing from './pages/Landing'
import Model from './pages/Model'
import Settings from './pages/Settings'
import { navigationRoutes } from './routes'

function AppShell({ children, demoMode, onToggleDemo, onToast, onOpenModal }) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setMobileOpen(false), [location.pathname])

  return (
    <div className="app-shell">
      <Sidebar
        routes={navigationRoutes}
        collapsed={collapsed}
        onCollapse={() => setCollapsed((prev) => !prev)}
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
      <div className="content-wrap">
        <Navbar onMenu={() => setMobileOpen(true)} demoMode={demoMode} onToggleDemo={onToggleDemo} />
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            className="main-content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.24 }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default function App() {
  const [demoMode, setDemoMode] = useState(true)
  const [toasts, setToasts] = useState([])
  const [modalState, setModalState] = useState({ open: false, title: '', body: '' })

  const onToast = (message, type = 'info') => {
    const id = Date.now() + Math.random()
    setToasts((prev) => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, 3200)
  }

  const appProps = useMemo(
    () => ({
      demoMode,
      onToast,
      onOpenModal: (title, body) => setModalState({ open: true, title, body }),
    }),
    [demoMode],
  )

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/dashboard"
          element={
            <AppShell demoMode={demoMode} onToggleDemo={() => setDemoMode((prev) => !prev)} {...appProps}>
              <Dashboard {...appProps} />
            </AppShell>
          }
        />
        <Route
          path="/analyze"
          element={
            <AppShell demoMode={demoMode} onToggleDemo={() => setDemoMode((prev) => !prev)} {...appProps}>
              <Analyze {...appProps} />
            </AppShell>
          }
        />
        <Route
          path="/history"
          element={
            <AppShell demoMode={demoMode} onToggleDemo={() => setDemoMode((prev) => !prev)} {...appProps}>
              <History {...appProps} />
            </AppShell>
          }
        />
        <Route
          path="/dataset"
          element={
            <AppShell demoMode={demoMode} onToggleDemo={() => setDemoMode((prev) => !prev)} {...appProps}>
              <Dataset {...appProps} />
            </AppShell>
          }
        />
        <Route
          path="/model"
          element={
            <AppShell demoMode={demoMode} onToggleDemo={() => setDemoMode((prev) => !prev)} {...appProps}>
              <Model {...appProps} />
            </AppShell>
          }
        />
        <Route
          path="/about"
          element={
            <AppShell demoMode={demoMode} onToggleDemo={() => setDemoMode((prev) => !prev)} {...appProps}>
              <About {...appProps} />
            </AppShell>
          }
        />
        <Route
          path="/settings"
          element={
            <AppShell demoMode={demoMode} onToggleDemo={() => setDemoMode((prev) => !prev)} {...appProps}>
              <Settings {...appProps} />
            </AppShell>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Modal open={modalState.open} title={modalState.title} onClose={() => setModalState({ open: false, title: '', body: '' })}>
        <p>{modalState.body}</p>
      </Modal>
      <ToastStack toasts={toasts} onDismiss={(id) => setToasts((prev) => prev.filter((item) => item.id !== id))} />
    </>
  )
}
