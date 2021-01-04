# API Server

This server uses webpack to allow modular development. To run open 2 terminals. Execute the following to start the dev server based on the dev build

`yarn dev`

## Documentation

#### Database

This uses `knex.js` and `pg` for database interactions with postgres. The configuration is found in `knexfile.js`. You can learn how to use `knex.js` [here](http://knexjs.org/).

`yarn create:migration` - Create a new migration file

`yarn create:seed` - Create a new database seed file

`yarn db:migrate` - Migrate all pending migrations

`yarn db:rollback` - Rollback the last migration batch (all migrations which ran when `db:migrate` was last executed)

`yarn db:seed` - Run all seed files. Specify a specific seed using `--specific-seed=filename.js`

`yarn db:status` - To see the state of migrations you can execute (completed and pending)

#### Building the API

Building the API is done by programmatically creating an OpenAPI 3.0 doc. This can be done using javascript modules as to allow easy maintenance and grouping of related endpoints. New endpoints should be placed in the `src/api/paths` while any needed schema definitions should be placed in `src/api/schema`.

It is important to note that each method in the api spec (under `src/api/paths`) need to include values for `x-controller` which is the controller name the endpoint will route to and `operationId` which is the function in the controller that will received the request.

#### Request Flow

This template is opinionated and uses a controller, service, client architecture. The flow of a request would go as follows

```
Request -----> Controller ------> Service ------> Client -------  
                                                               |  
                                                               |  
                                                          Database/API  
                                                               |  
                                                               |  
Response <---- Controller <------ Service <------ Client <------
```