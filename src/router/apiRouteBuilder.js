import express from 'express'
import * as controllers from '@/controllers'

export default (() => {
  const router = express.Router()
  let apiDefinition
  
  const buildRoute = (path, method, info) => {
    let controller
    
    if (!info.operationId) throw new Error(`${path}: operationId required.`)
    if (!info['x-controller']) throw new Error(`${path}: x-controller required.`)
    
    if (!controllers[info['x-controller']]) {
      const msg = `controller ${info['x-controller']} could not be found.`
      throw new Error(msg)
    }
    else
      controller = controllers[info['x-controller']]
    
    const action = controller[info.operationId]
    if (!action || !(action instanceof Function))
      throw new Error(`${info.operationId} is not a function in controller ${controller}.`)
    
    const endPoint = path.replace(/{/g, ':').replace(/}/g, '')
    
    router[method](endPoint, (req, res, next) => {
      if (req.method === "GET" || req.method === "DELETE") action(req, res, next, { ...req.query, ...req.params })
      else action(req, res, next, req.body, { ...req.query, ...req.params })
    })
  }
  
  return api => {
    if (!api) throw new Error('No api found')
    if (!api.paths) throw new Errors('No API paths found')
    
    const paths = Object.keys(api.paths)
    
    paths.forEach( path => {
      const pathData = api.paths[path]
      
      if (pathData.post) buildRoute(path, 'post', pathData.post)
      if (pathData.get) buildRoute(path, 'get', pathData.get)
      if (pathData.put) buildRoute(path, 'put', pathData.put)
      if (pathData.delete) buildRoute(path, 'delete', pathData.delete)
    })
    
    return router
  }
})()