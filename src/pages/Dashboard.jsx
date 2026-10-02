import { useEffect, useState } from 'react'
import { FiRefreshCcw } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import AnalysisCard from '../components/AnalysisCard'
import Badge from '../components/Badge'
import Button from '../components/Button'
import Card from '../components/Card'
import LoadingState from '../components/LoadingState'
import StatCard from '../components/StatCard'
import { alternativeEnhancements, analysisTemplate } from '../data/mockData'
import { analyzeText, getDashboardStats } from '../services/mockApi'

const defaultInput = 'Wow bro, amazing work. You submitted the project only two days late.'

export default function Dashboard({ demoMode, onToast, onOpenModal }) {
  const navigate = useNavigate()
  const [stats, setStats] = useState([])
  const [loadingStats, setLoadingStats] = useState(true)
  const [text, setText] = useState(defaultInput)
  const [context, setContext] = useState('')
  const [loadingAnalysis, setLoadingAnalysis] = useState(false)
  const [result, setResult] = useState(analysisTemplate)

  useEffect(() => {
    getDashboardStats()
      .then(setStats)
      .finally(() => setLoadingStats(false))
  }, [])

  const handleAnalyze = async () => {
    try {
      setLoadingAnalysis(true)
      const response = await analyzeText({ text, context })
      setResult(response)
      onToast('Analysis completed for dashboard quick input.', 'success')
    } catch (error) {
      onToast(error.message, 'error')
    } finally {
      setLoadingAnalysis(false)
    }
  }

  const generateAlternative = () => {
    const randomAlt = alternativeEnhancements[Math.floor(Math.random() * alternativeEnhancements.length)]
    setResult((prev) => ({
      ...prev,
      enhancements: {
        ...prev.enhancements,
        professional: randomAlt.professional,
        natural: randomAlt.natural,
      },
    }))
    onToast('Generated alternative enhancement style.', 'info')
  }

  return (
    <div className="page dashboard-page">
      <section className="hero-block card-glass">
        <h2>Culture-Aware Pragmatic AI</h2>
        <h3>Understand meaning beyond words.</h3>
        <p>
          Sarcasm detection, pragmatic intent analysis, and culturally aware language enhancement
          for Indian English and code-mixed communication.
        </p>
        <Button onClick={() => navigate('/analyze')}>Analyze Text</Button>
      </section>

      <section className="stats-grid">
        {loadingStats ? (
          <LoadingState message="Loading dashboard metrics..." />
        ) : (
          stats.map((item) => <StatCard key={item.title} {...item} demoMode={demoMode} />)
        )}
      </section>

      <section className="two-col-layout">
        <Card className="quick-analysis-card">
          <div className="card-title-row">
            <h3>Analyze a sentence</h3>
            {demoMode && <Badge text="DEMO DATA" tone="info" />}
          </div>
          <textarea value={text} onChange={(e) => setText(e.target.value)} rows={4} aria-label="Text for quick analysis" />
          <div className="field-grid">
            <label>
              Language
              <input value="Auto Detect" readOnly />
            </label>
            <label>
              Context
              <input value={context} onChange={(e) => setContext(e.target.value)} placeholder="Optional context" />
            </label>
          </div>
          <Button onClick={handleAnalyze} disabled={loadingAnalysis}>
            Analyze Text
          </Button>
          {loadingAnalysis && <LoadingState message="Analyzing pragmatic context..." />}
        </Card>

        <AnalysisCard result={result} />
      </section>

      <section className="two-col-layout">
        <Card>
          <h3>Contextual Interpretation</h3>
          <p>{result.interpretation}</p>
          <div className="split-detail">
            <div>
              <h4>Literal Meaning</h4>
              <p>{result.literalMeaning}</p>
            </div>
            <div>
              <h4>Pragmatic Meaning</h4>
              <p>{result.pragmaticMeaning}</p>
            </div>
          </div>
          <Button variant="ghost" onClick={() => onOpenModal('Interpretation Rationale', result.interpretation)}>
            View Rationale
          </Button>
        </Card>

        <Card>
          <h3>Contextual Language Enhancement</h3>
          <div className="enhancement-block">
            <p className="label">Original</p>
            <p>{result.enhancements.original}</p>
            <p className="label">Professional</p>
            <p>{result.enhancements.professional}</p>
            <p className="label">Natural Conversational</p>
            <p>{result.enhancements.natural}</p>
          </div>
          <Button variant="secondary" onClick={generateAlternative}>
            <FiRefreshCcw /> Generate Alternative
          </Button>
        </Card>
      </section>

      <Card>
        <h3>Indian Code-Mixed Analysis</h3>
        <div className="code-mix-grid">
          <div>
            <p className="label">Example Input</p>
            <p>Nuvvu super ra, assignment last day lo submit chesav.</p>
          </div>
          <div>
            <p>
              <strong>Language:</strong> Telugu-English
            </p>
            <p>
              <strong>Code Mixing:</strong> Detected
            </p>
            <p>
              <strong>Sarcasm:</strong> Detected
            </p>
            <p>
              <strong>Intent:</strong> Mocking / Criticism
            </p>
            <p>
              <strong>Confidence:</strong> 89%
            </p>
          </div>
        </div>
        <p className="highlight-copy">
          The speaker appears to use praise sarcastically to criticize the late submission.
        </p>
      </Card>
    </div>
  )
}
