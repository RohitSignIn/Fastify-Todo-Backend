import {
  fetchAllTodo,
  fetchTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../../controllers/todo.controller.js";
import validateJWT from "../../utility/validateJWT.js";

const TodoRoute = (fastify, options, done) => {
  // Get all Todos
  fastify.get(
    "/",
    {
      preHandler: validateJWT,
    },
    fetchAllTodo
  );

  // Get Todo By Id
  fastify.get(
    "/:id",
    {
      preHandler: validateJWT,
    },
    fetchTodoById
  );

  // Create Todo
  fastify.post(
    "/",
    {
      preHandler: validateJWT,
    },
    createTodo
  );

  // Update Todo
  fastify.put(
    "/",
    {
      preHandler: validateJWT,
    },
    updateTodo
  );

  // Delete Todo
  fastify.delete(
    "/:id",
    {
      preHandler: validateJWT,
    },
    deleteTodo
  );

  done();
};

export default TodoRoute;
