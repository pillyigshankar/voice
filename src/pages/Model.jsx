import { useEffect, useState } from 'react'
import { Line, LineChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts'
import Badge from '../components/Badge'
import Card from '../components/Card'
import LoadingState from '../components/LoadingState'
import { getModelStats } from '../services/mockApi'

export default function Model({ demoMode }) {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    getModelStats().then(setStats)
  }, [])

  if (!stats) return <LoadingState message="Loading model statistics..." />

  return (
    <div className="page">
      <h2 className="page-title">Model Performance</h2>
      <p className="proto-note">
        Illustrative Results {demoMode && <Badge text="DEMO DATA" tone="info" />}
      </p>

      <div className="stats-grid">
        {stats.models.map((model) => (
          <Card key={model.name} className="model-card">
            <h3>{model.name}</h3>
            <p>Accuracy: {model.accuracy}%</p>
            <p>Precision: {model.precision}%</p>
            <p>Recall: {model.recall}%</p>
            <p>F1 Score: {model.f1}%</p>
          </Card>
        ))}
      </div>

      <Card>
        <h3>Comparison Chart</h3>
        <div className="chart-wrap">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={stats.models}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f2a44" />
              <XAxis dataKey="name" stroke="#9ab0d0" />
              <YAxis stroke="#9ab0d0" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="accuracy" stroke="#14b8ff" strokeWidth={2} />
              <Line type="monotone" dataKey="f1" stroke="#8b5cf6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card>
        <h3>Proposed Architecture</h3>
        <div className="flow-grid">
          {[
            'Input',
            'Preprocessing',
            'Transformer Encoder',
            'Context Analysis',
            'Sarcasm Detection',
            'Pragmatic Intent',
            'Cultural Context',
            'Language Enhancement',
            'Output',
          ].map((step, index, arr) => (
            <div key={step} className="flow-step">
              <span>{step}</span>
              {index < arr.length - 1 && <small>↓</small>}
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
