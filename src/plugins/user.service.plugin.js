import fp from "fastify-plugin";
import UserService from "../services/user.service.js";

export default fp(function userServicePlugin(fastify, opts, done) {
  const userService = new UserService(fastify);

  fastify.decorate("userService", userService);

  done();
});
