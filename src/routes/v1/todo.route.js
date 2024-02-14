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
  fastify.get("/:id", fetchTodoById);

  // Create Todo
  fastify.post("/", createTodo);

  // Update Todo
  fastify.put("/", updateTodo);

  // Delete Todo
  fastify.delete("/:id", deleteTodo);

  done();
};

export default TodoRoute;
