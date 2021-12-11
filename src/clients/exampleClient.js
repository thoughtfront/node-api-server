import db from '../config/db'
import { v4 } from 'uuid'

export default {
  getExamples: async () => {
    // return await db('examples')
    return [{
      id: v4(),
      name: 'example'
    }]
  }
}