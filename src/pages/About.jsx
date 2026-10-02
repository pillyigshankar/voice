import Card from '../components/Card'

export default function About() {
  const focus = [
    'Sarcasm Detection',
    'Pragmatic Understanding',
    'Indian English',
    'Telugu-English Code Mixing',
    'Cultural Context',
    'Contextual Language Enhancement',
  ]

  const tech = [
    'Python',
    'PyTorch',
    'Hugging Face Transformers',
    'XLM-R / MuRIL / IndicBERT',
    'FastAPI',
    'React',
    'MySQL',
    'Docker',
  ]

  return (
    <div className="page">
      <h2 className="page-title">Culture-Aware Pragmatic Conversational AI</h2>

      <Card>
        <h3>Problem</h3>
        <p>
          Conventional language systems may understand grammatical and literal meaning but can
          struggle with sarcasm, indirect communication, humor, cultural context, and Indian
          code-mixed language.
        </p>
      </Card>

      <Card>
        <h3>Objective</h3>
        <p>
          To develop an AI system capable of detecting sarcasm, understanding pragmatic intent,
          considering cultural context, and generating contextually appropriate language
          enhancements.
        </p>
      </Card>

      <div className="focus-grid">
        {focus.map((item) => (
          <Card key={item} className="focus-card">
            <h4>{item}</h4>
          </Card>
        ))}
      </div>

      <Card>
        <h3>Proposed Technology</h3>
        <div className="chips">
          {tech.map((item) => (
            <span key={item} className="tech-chip">{item}</span>
          ))}
        </div>
      </Card>

      <Card>
        <h3>Research Workflow</h3>
        <div className="flow-grid">
          {[
            'Data Collection',
            'Data Preprocessing',
            'Model Training',
            'Sarcasm Detection',
            'Pragmatic Analysis',
            'Cultural Context',
            'Language Enhancement',
            'Evaluation',
          ].map((step, index, arr) => (
            <div key={step} className="flow-step">
              <span>{step}</span>
              {index < arr.length - 1 && <small>↓</small>}
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
