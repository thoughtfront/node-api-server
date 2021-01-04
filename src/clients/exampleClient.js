import db from '../config/db'

export default {
  getExamples: async () => {
    return await db('examples')
  }
}