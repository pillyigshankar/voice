import { FiTrendingDown, FiTrendingUp } from 'react-icons/fi'
import Badge from './Badge'
import Card from './Card'

export default function StatCard({ title, value, trend, positive, demoMode }) {
  return (
    <Card className="stat-card">
      <div className="stat-header">
        <p>{title}</p>
        {demoMode && <Badge text="DEMO DATA" tone="info" />}
      </div>
      <h3>{value}</h3>
      <div className="trend-row">
        {positive ? <FiTrendingUp /> : <FiTrendingDown />}
        <span>{trend}</span>
      </div>
    </Card>
  )
}
