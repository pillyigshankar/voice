import { useEffect, useMemo, useState } from 'react'
import Badge from '../components/Badge'
import Card from '../components/Card'
import EmptyState from '../components/EmptyState'
import LoadingState from '../components/LoadingState'
import { getHistory } from '../services/mockApi'

const filters = ['All', 'Sarcastic', 'Non-Sarcastic', 'Code-Mixed']

export default function History() {
  const [history, setHistory] = useState([])
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getHistory()
      .then(setHistory)
      .finally(() => setLoading(false))
  }, [])

  const filtered = useMemo(() => {
    return history.filter((item) => {
      const searchMatch = item.input.toLowerCase().includes(search.toLowerCase())
      if (!searchMatch) return false
      if (activeFilter === 'Sarcastic') return item.sarcasm === 'Detected'
      if (activeFilter === 'Non-Sarcastic') return item.sarcasm !== 'Detected'
      if (activeFilter === 'Code-Mixed') return item.codeMixed
      return true
    })
  }, [activeFilter, history, search])

  return (
    <div className="page">
      <h2 className="page-title">Analysis History</h2>
      <Card>
        <div className="history-controls">
          <input type="search" placeholder="Search by input text" value={search} onChange={(e) => setSearch(e.target.value)} />
          <div className="filter-row">
            {filters.map((filter) => (
              <button key={filter} className={`filter-chip ${activeFilter === filter ? 'active' : ''}`} onClick={() => setActiveFilter(filter)}>
                {filter}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <LoadingState message="Loading history..." />
        ) : filtered.length === 0 ? (
          <EmptyState title="No matching analyses" description="Adjust search or filters to view prototype history records." />
        ) : (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Input</th>
                  <th>Language</th>
                  <th>Sarcasm</th>
                  <th>Intent</th>
                  <th>Confidence</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item) => (
                  <tr key={item.id}>
                    <td>{item.date}</td>
                    <td>{item.input}</td>
                    <td>{item.language}</td>
                    <td>
                      <Badge text={item.sarcasm} tone={item.sarcasm === 'Detected' ? 'danger' : 'success'} />
                    </td>
                    <td>{item.intent}</td>
                    <td>{item.confidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  )
}
