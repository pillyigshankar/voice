import { useState } from 'react'
import Badge from '../components/Badge'
import Card from '../components/Card'

export default function Settings() {
  const [theme] = useState('Dark')
  const [language] = useState('Auto Detect')
  const [analysis] = useState('Full Analysis')
  const [animations] = useState('Enabled')

  return (
    <div className="page">
      <h2 className="page-title">Settings</h2>
      <Card>
        <div className="settings-list">
          <div><p>Theme</p><Badge text={theme} tone="info" /></div>
          <div><p>Language</p><Badge text={language} /></div>
          <div><p>Default Analysis</p><Badge text={analysis} /></div>
          <div><p>Animations</p><Badge text={animations} tone="success" /></div>
        </div>
      </Card>
    </div>
  )
}
