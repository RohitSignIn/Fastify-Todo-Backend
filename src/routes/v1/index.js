const todoRoute = require("./todo.route");
const userRoute = require("./user.route");

const v1Router = (fastify, options, done) => {
  fastify.register(userRoute, { prefix: "/user" });
  fastify.register(todoRoute, { prefix: "/todo" });

  done();
};

module.exports = v1Router;
