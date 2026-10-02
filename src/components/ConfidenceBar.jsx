export default function ConfidenceBar({ value }) {
  return (
    <div className="confidence-wrap">
      <div className="confidence-head">
        <span>Confidence</span>
        <strong>{value}%</strong>
      </div>
      <div className="confidence-track" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={value}>
        <span className="confidence-fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}
