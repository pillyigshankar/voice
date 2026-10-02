export default function LoadingState({ message = 'Processing...' }) {
  return (
    <div className="loading-state" role="status" aria-live="polite">
      <span className="spinner" />
      <p>{message}</p>
    </div>
  )
}
