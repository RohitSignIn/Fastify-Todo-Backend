import fp from "fastify-plugin";
import TodoService from "../services/todo.service.js";

export default fp(function todoServicePlugin(fastify, opts, done) {
  const todoService = new TodoService(fastify);

  fastify.decorate("todoService", todoService);

  done();
});
