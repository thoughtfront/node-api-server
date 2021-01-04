import exampleService from '../services/exampleService'

export default {
  getExamples: async (req, res, next) => {
    const response =  await exampleService.getAllExamples()
    
    res.json(response)
  }
}