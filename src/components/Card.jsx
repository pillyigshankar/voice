export default function Card({ children, className = '' }) {
  return <section className={`card-glass ${className}`.trim()}>{children}</section>
}
