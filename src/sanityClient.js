import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: 'v1snxays',         
  dataset: 'production',         
  apiVersion: '2023-01-01',      
  useCdn: true,                  
})
