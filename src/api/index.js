import paths from './paths'
import schemas from './schemas'

export default {
  openapi: "3.0.2",
  info: {
    title: "example",
    version: "0.0.0",
    description: ""
  },
  paths,
  components: {
    schemas
  },
}