export default async function getFeatures () {
  return await fetch('https://test-task-frontend-2023.slava.digital', {
    method: 'POST'
  })
}