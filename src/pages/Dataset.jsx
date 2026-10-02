import {
  CartesianGrid,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  BarChart,
} from 'recharts'
import Badge from '../components/Badge'
import Card from '../components/Card'
import LoadingState from '../components/LoadingState'
import { useEffect, useState } from 'react'
import { getDatasetStats } from '../services/mockApi'

export default function Dataset({ demoMode }) {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    getDatasetStats().then(setStats)
  }, [])

  if (!stats) return <LoadingState message="Loading dataset overview..." />

  return (
    <div className="page">
      <h2 className="page-title">Dataset Overview</h2>
      <p className="proto-note">
        Prototype / Sample Data {demoMode && <Badge text="DEMO DATA" tone="info" />}
      </p>
      <div className="stats-grid">
        <Card className="stat-card"><p>Total Samples</p><h3>{stats.total}</h3></Card>
        <Card className="stat-card"><p>Sarcastic</p><h3>{stats.sarcastic}</h3></Card>
        <Card className="stat-card"><p>Non-Sarcastic</p><h3>{stats.nonSarcastic}</h3></Card>
        <Card className="stat-card"><p>Code-Mixed</p><h3>{stats.codeMixed}</h3></Card>
      </div>

      <div className="two-col-layout">
        <Card>
          <h3>Sarcastic vs Non-Sarcastic</h3>
          <div className="chart-wrap">
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie data={stats.sarcasmDistribution} dataKey="value" nameKey="name" outerRadius={92} fill="#14b8ff" label />
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <h3>Language Distribution</h3>
          <div className="chart-wrap">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={stats.languageDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2a44" />
                <XAxis dataKey="name" stroke="#9ab0d0" />
                <YAxis stroke="#9ab0d0" />
                <Tooltip />
                <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  )
}
