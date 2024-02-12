import fp from "fastify-plugin";
import UserService from "./user.service.js";

export default fp(function serviceRegistery(fastify, opts, done) {
  const userService = new UserService(fastify);

  fastify.decorate("userService", userService);

  done();
});
