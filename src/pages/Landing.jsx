import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="landing-page">
      <motion.div
        className="landing-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <h1>
          Understand Meaning
          <br />
          Beyond Words.
        </h1>
        <p>
          A culture-aware AI system for sarcasm detection, pragmatic understanding, and
          contextual language enhancement in Indian English.
        </p>
        <div className="landing-actions">
          <Button onClick={() => navigate('/dashboard')}>
            Try Analysis <FiArrowRight />
          </Button>
          <Button variant="ghost" onClick={() => navigate('/about')}>
            Explore Research
          </Button>
        </div>
      </motion.div>

      <div className="landing-visual card-glass">
        <div className="node">Sarcasm</div>
        <div className="node">Pragmatics</div>
        <div className="node">Culture</div>
        <div className="node">Context</div>
        <span className="line line-1" />
        <span className="line line-2" />
        <span className="line line-3" />
        <span className="line line-4" />
      </div>
    </div>
  )
}
