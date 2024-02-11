import todoRoute from "./todo.route.js";
import userRoute from "./user.route.js";

const v1Router = (fastify, options, done) => {
  fastify.register(userRoute, { prefix: "/user" });
  fastify.register(todoRoute, { prefix: "/todo" });

  done();
};

export default v1Router;
