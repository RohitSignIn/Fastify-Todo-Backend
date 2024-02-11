import v1Router from "./v1/v1.route.js";

const mainRoutes = (fastify, options, done) => {
  fastify.register(v1Router, { prefix: "/v1" });
  done();
};

export default mainRoutes;
