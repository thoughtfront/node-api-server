import paths from './paths'
import schemas from './schemas'

export default {
  openapi: "3.0.2",
  info: {
    title: "server-a",
    version: "0.0.1",
    description: ""
  },
  paths,
  components: {
    schemas
  },
}