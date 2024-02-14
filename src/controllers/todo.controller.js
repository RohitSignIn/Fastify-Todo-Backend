import constructResponse from "../utility/constructResponse.js";

async function fetchAllTodo(req, res) {
  try {
    const todos = await this.todoService.getAll(req.userId);
    return res
      .code(200)
      .send(constructResponse(true, todos, "Successfully fetched all todos"));
  } catch (error) {
    console.log(error);
  }
}

async function fetchTodoById(req, res) {
  try {
    const todo = await this.todoService.getById(req.params.id, req.userId);
    return res
      .code(200)
      .send(constructResponse(true, todo, "Successfully fetch todo"));
  } catch (error) {
    console.log(error);
  }
}

async function createTodo(req, res) {
  try {
    const todo = await this.todoService.create(req.body, req.userId);
    console.log(todo);
    return res
      .code(201)
      .send(constructResponse(true, todo, "Successfully created todo"));
  } catch (error) {
    console.log(error);
  }
}

async function updateTodo(req, res) {
  try {
    const todo = await this.todoService.update(req.body, req.userId);
    return res
      .code(201)
      .send(constructResponse(true, todo, "Successfully updated todo"));
  } catch (error) {
    console.log(error);
  }
}

async function deleteTodo(req, res) {
  try {
    const todos = await this.todoService.delete(req.params.id, req.userId);
    return res.send(constructResponse(true, {}, "Successfully deleted todo"));
  } catch (error) {
    console.log(error);
  }
}

export { fetchAllTodo, fetchTodoById, createTodo, updateTodo, deleteTodo };
