import Badge from './Badge'
import Card from './Card'
import ConfidenceBar from './ConfidenceBar'

export default function AnalysisCard({ result }) {
  if (!result) return null

  return (
    <Card className="analysis-result">
      <h3>Analysis Result</h3>
      <div className="result-grid">
        <div>
          <p className="label">Language</p>
          <p>{result.language}</p>
        </div>
        <div>
          <p className="label">Code-Mixing</p>
          <Badge text={result.codeMixing} tone={result.codeMixing === 'Detected' ? 'warning' : 'success'} />
        </div>
        <div>
          <p className="label">Sarcasm</p>
          <Badge text={result.sarcasm} tone={result.sarcasm === 'Detected' ? 'danger' : 'success'} />
          <ConfidenceBar value={result.sarcasmConfidence} />
        </div>
        <div>
          <p className="label">Pragmatic Intent</p>
          <p>{result.pragmaticIntent}</p>
        </div>
        <div>
          <p className="label">Emotion</p>
          <p>{result.emotion}</p>
        </div>
        <div>
          <p className="label">Cultural Context</p>
          <p>{result.culturalContext}</p>
        </div>
      </div>
    </Card>
  )
}
