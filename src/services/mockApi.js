import {
  analysisTemplate,
  dashboardStats,
  datasetStats,
  historyData,
  modelStats,
} from '../data/mockData'

const delay = (ms = 700) => new Promise((resolve) => setTimeout(resolve, ms))

export async function analyzeText(payload) {
  await delay(1000)

  if (!payload?.text?.trim()) {
    throw new Error('Please enter text for analysis.')
  }

  const isCodeMixed = /\b(ra|nuvvu|chesav|lo|ayindi)\b/i.test(payload.text)

  return {
    ...analysisTemplate,
    language: isCodeMixed ? 'Telugu-English' : analysisTemplate.language,
    codeMixing: isCodeMixed ? 'Detected' : analysisTemplate.codeMixing,
    sarcasmConfidence: isCodeMixed ? 89 : analysisTemplate.sarcasmConfidence,
  }
}

export async function getHistory() {
  await delay()
  return historyData
}

export async function getDatasetStats() {
  await delay()
  return datasetStats
}

export async function getModelStats() {
  await delay()
  return modelStats
}

export async function getDashboardStats() {
  await delay()
  return dashboardStats
}
