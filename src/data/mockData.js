export const dashboardStats = [
  { title: 'Total Analyses', value: '1,248', trend: '+8.4%', positive: true },
  { title: 'Sarcasm Detected', value: '672', trend: '+5.2%', positive: true },
  { title: 'Code-Mixed Inputs', value: '384', trend: '+2.7%', positive: true },
  { title: 'Average Confidence', value: '91.4%', trend: '+1.9%', positive: true },
]

export const analysisTemplate = {
  language: 'Indian English',
  codeMixing: 'Not Detected',
  sarcasm: 'Detected',
  sarcasmConfidence: 94,
  pragmaticIntent: 'Criticism',
  emotion: 'Negative',
  culturalContext: 'Context-dependent conversational sarcasm',
  interpretation:
    'The sentence appears to use positive wording sarcastically to criticize the late submission of the project.',
  literalMeaning: 'The speaker appears to praise the work.',
  pragmaticMeaning:
    'The speaker is criticizing the late submission through sarcasm.',
  enhancements: {
    original: 'Wow bro, amazing work. You submitted the project only two days late.',
    professional: 'The project was submitted two days late.',
    natural: 'Bro, the project was submitted two days late.',
  },
}

export const alternativeEnhancements = [
  {
    professional: 'The submission occurred two days after the deadline.',
    natural: 'You submitted it two days late, bro.',
  },
  {
    professional: 'The project was delayed by two days in submission.',
    natural: 'Project two days late ayindi bro.',
  },
]

export const historyData = [
  {
    id: 1,
    date: '02 Oct 2026',
    input: 'Wow, great timing!',
    language: 'Indian English',
    sarcasm: 'Detected',
    intent: 'Sarcasm',
    confidence: '92%',
    codeMixed: false,
  },
  {
    id: 2,
    date: '01 Oct 2026',
    input: 'Nuvvu super ra, last minute lo complete chesav.',
    language: 'Telugu-English',
    sarcasm: 'Detected',
    intent: 'Mocking / Criticism',
    confidence: '89%',
    codeMixed: true,
  },
  {
    id: 3,
    date: '30 Sep 2026',
    input: 'Thanks for sending it on time.',
    language: 'English',
    sarcasm: 'Not Detected',
    intent: 'Appreciation',
    confidence: '87%',
    codeMixed: false,
  },
  {
    id: 4,
    date: '29 Sep 2026',
    input: 'Bro, perfect planning... as always.',
    language: 'Indian English',
    sarcasm: 'Detected',
    intent: 'Criticism',
    confidence: '90%',
    codeMixed: false,
  },
]

export const datasetStats = {
  total: '5,000',
  sarcastic: '2,400',
  nonSarcastic: '2,600',
  codeMixed: '1,350',
  sarcasmDistribution: [
    { name: 'Sarcastic', value: 2400 },
    { name: 'Non-Sarcastic', value: 2600 },
  ],
  languageDistribution: [
    { name: 'Indian English', value: 1800 },
    { name: 'Telugu-English', value: 1350 },
    { name: 'English', value: 1500 },
    { name: 'Other', value: 350 },
  ],
}

export const modelStats = {
  models: [
    { name: 'BERT', accuracy: 84, precision: 82, recall: 83, f1: 82 },
    { name: 'XLM-R', accuracy: 87, precision: 86, recall: 85, f1: 85 },
    { name: 'MuRIL', accuracy: 88, precision: 87, recall: 86, f1: 86 },
    { name: 'Proposed Model', accuracy: 91, precision: 90, recall: 89, f1: 90 },
  ],
}
