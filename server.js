const server = require("fastify")()

// process and parse application/x-www-form-urlencoded
server.register(require('@fastify/formbody'))

// server.register(require('@fastify/cookie'))
//
// server.options("/api", (request, response) => {
//   return response
//     .status(200)
//     .header("Access-Control-Allow-Origin", "http://localhost:3000")
//     .header("Access-Control-Allow-Methods", "PUT, POST")
//     .header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept")
//     .header('Access-Control-Allow-Credentials', true)
//     .send()
// })

server.get("/api", (request, response) => {
  response
    // .setCookie('sectretID', 'My abracadabra')
    return response
      // .header("Access-Control-Allow-Origin", "http://localhost:3000")
      // .header('Access-Control-Allow-Credentials', true)

      // .header("Content-Type", "text/html")
      // .send(request.query.callback + "(" + JSON.stringify({message: "Hello from server"}) + ")") // JSONP
      .send({
        ...request.body,
        message: "Hello from server"
      });

});

server.listen({port: 3001}).then(console.log)
