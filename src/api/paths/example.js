export default {
  "/example": {
    summary: "An example endpoint.",
    description: "sets an example",
    get: {
      operationId: "getExamples",
      summary: "Get All Examples",
      tags: [],
      description: "Gets a list of all examples.",
      'x-controller': "Example",
      responses: {
        '200': {
          description: "Successful response - returns an array of `Examples` entities.",
          content: {
            'application/json': {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/Example"
                }
              }
            }
          }
        }
      }
    }
  }
}