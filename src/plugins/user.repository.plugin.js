import fp from "fastify-plugin";
import UserRepository from "../repository/user.repository.js";

export default fp(function userRepositoryPlugin(fastify, opts, done) {
  const userRepository = new UserRepository(fastify);

  fastify.decorate("userRepository", userRepository);

  done();
});
