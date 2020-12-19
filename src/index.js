import http from 'http'
import cors from 'cors'
import bodyParser from 'body-parser'
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import config from './config'
import apiRouteBuilder from './router/apiRouteBuilder'
import api from './api'

const app = express()

const apiRouter = apiRouteBuilder(api)

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(apiRouter)

app.use('/', swaggerUi.serve)
app.get('/', swaggerUi.setup(api))

// Initialize the Swagger middleware
app.listen(config.port, function () {
  console.log('Your server is listening on port %d (http://localhost:%d)', config.port, config.port);
  console.log('Swagger-ui is available on http://localhost:%d', config.port);
});