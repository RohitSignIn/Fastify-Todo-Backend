async function fetchAllTodo(req, reply) {
  return { ping: "done" };
}

async function fetchTodoById(req, reply) {
  return { ping: "success" };
}

async function createTodo(req, reply) {
  return { ping: "success" };
}

async function updateTodo(req, reply) {
  return { ping: "success" };
}

async function deleteTodo(req, reply) {
  return { ping: "success" };
}

export { fetchAllTodo, fetchTodoById, createTodo, updateTodo, deleteTodo };
