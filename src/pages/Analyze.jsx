import { useState } from 'react'
import AnalysisCard from '../components/AnalysisCard'
import Button from '../components/Button'
import Card from '../components/Card'
import LoadingState from '../components/LoadingState'
import { analyzeText } from '../services/mockApi'

export default function Analyze({ onToast }) {
  const [input, setInput] = useState('')
  const [context, setContext] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleAnalyze = async () => {
    try {
      setLoading(true)
      const response = await analyzeText({ text: input, context })
      setResult(response)
      onToast('Full analysis complete.', 'success')
    } catch (error) {
      onToast(error.message, 'error')
      setResult(null)
    } finally {
      setLoading(false)
    }
  }

  const clearAll = () => {
    setInput('')
    setContext('')
    setResult(null)
  }

  return (
    <div className="page">
      <h2 className="page-title">Analyze Workspace</h2>
      <div className="analysis-layout">
        <Card>
          <h3>Input</h3>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={10}
            placeholder="Enter English, Indian English, or Telugu-English code-mixed text"
          />
          <p className="char-count">Character Count: {input.length}</p>
          <label>
            Context
            <textarea value={context} onChange={(e) => setContext(e.target.value)} rows={4} placeholder="Optional pragmatic context" />
          </label>
          <div className="button-row">
            <Button variant="ghost" onClick={clearAll}>
              Clear
            </Button>
            <Button onClick={handleAnalyze} disabled={loading}>
              Analyze
            </Button>
          </div>
        </Card>

        <div className="analysis-right">
          {loading ? <LoadingState message="Running contextual analysis..." /> : <AnalysisCard result={result} />}
          {result && (
            <Card>
              <h3>Interpretation</h3>
              <p>{result.interpretation}</p>
              <h4>Enhancement</h4>
              <p>{result.enhancements.professional}</p>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
