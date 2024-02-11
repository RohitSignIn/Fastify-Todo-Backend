const fetchAllTodo = (req, reply) => {
  return { ping: "done" };
};

const fetchTodoById = (req, reply) => {
  return { ping: "success" };
};

const createTodo = (req, reply) => {
  return { ping: "success" };
};

const updateTodo = (req, reply) => {
  return { ping: "success" };
};

const deleteTodo = (req, reply) => {
  return { ping: "success" };
};

export { fetchAllTodo, fetchTodoById, createTodo, updateTodo, deleteTodo };
