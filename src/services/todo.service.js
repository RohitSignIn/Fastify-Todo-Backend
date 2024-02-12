class TodoService {
  constructor(fastify) {
    this.fastify = fastify;
  }

  async getAll() {
    try {
      const todos = await this.fastify.todoRepository.getAll();
      return todos;
    } catch (error) {
      return error;
    }
  }

  async getById(id) {
    try {
      const todo = await this.fastify.todoRepository.getById(id);
      return todo;
    } catch (error) {
      return error;
    }
  }

  async create(data) {
    try {
      const task = data.task;
      const userId = data.userId;

      const todo = await this.fastify.todoRepository.create(task, userId);
      return todo;
    } catch (error) {
      return error;
    }
  }

  async update(data) {
    try {
      const update = data.update;
      const to = data.to;
      const id = data.id;

      const todo = await this.fastify.todoRepository.update(update, to, id);
      return todo;
    } catch (error) {
      return error;
    }
  }

  async delete(id) {
    try {
      const todo = await this.fastify.todoRepository.delete(id);
      return todo;
    } catch (error) {
      return error;
    }
  }
}

export default TodoService;
