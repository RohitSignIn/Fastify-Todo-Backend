// Import the framework and instantiate it
const Fastify = require("fastify");

const mainRoutes = require("./routes/index");

const app = Fastify({
  logger: true,
});

// NOTE: Fastify default support text/plain and application/json

// Declare a route
app.register(mainRoutes, { prefix: "/api" });

// Run the server!
app.listen({ port: 8000 }, () => {
  console.log("listening on port");
});
