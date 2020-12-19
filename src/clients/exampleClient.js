import { v4 as uuid } from 'uuid'
import dbClient from '../config/db-client'

export default {
  getExamples: async () => {
    return await dbClient('examples')
  }
}