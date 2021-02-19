import exampleService from '../services/exampleService'

export default {
  getExamples: async (req, res, next, params) => {
    try {
      const response =  await exampleService.getAllExamples()
      res.json(response)
    } catch(error) {
      next(error)
    }
  },
  postExample: async(req, res, next, body, params) {
    
  }
}