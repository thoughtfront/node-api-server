import exampleClient from '../clients/exampleClient'

/**
 * Get all blocks
 **/
export default {
  getAllExamples: async () => {
    return await exampleClient.getExamples()
  }
}