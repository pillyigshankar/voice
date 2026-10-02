import { FiX } from 'react-icons/fi'
import Button from './Button'

export default function Modal({ open, title, children, onClose }) {
  if (!open) return null

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label={title}>
      <div className="modal-card">
        <div className="modal-header">
          <h3>{title}</h3>
          <Button variant="ghost" onClick={onClose} aria-label="Close dialog">
            <FiX />
          </Button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
}
