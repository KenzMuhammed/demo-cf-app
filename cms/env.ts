const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
const dataset = process.env.SANITY_STUDIO_DATASET!

if (!projectId) {
  throw new Error(
    'Missing environment variable: SANITY_STUDIO_PROJECT_ID. ' +
      'Please create a .env file in the cms directory (see .env.example).',
  )
}

if (!dataset) {
  throw new Error(
    'Missing environment variable: SANITY_STUDIO_DATASET. ' +
      'Please create a .env file in the cms directory (see .env.example).',
  )
}

export {projectId, dataset}
