const v1Router = require("./v1/index");

const mainRoutes = (fastify, options, done) => {
  fastify.register(v1Router, { prefix: "/v1" });
  done();
};

module.exports = mainRoutes;
