import fp from "fastify-plugin";
import TodoRepository from "../repository/todo.repository.js";

export default fp(function todoRepositoryPlugin(fastify, opts, done) {
  const todoRepository = new TodoRepository(fastify);

  fastify.decorate("todoRepository", todoRepository);

  done();
});
