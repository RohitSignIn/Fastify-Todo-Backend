class TodoService {
  constructor(fastify) {
    this.fastify = fastify;
  }

  async getAll(userId) {
    try {
      const todos = await this.fastify.todoRepository.getAll(userId);
      return todos;
    } catch (error) {
      throw error;
    }
  }

  async getById(id, userId) {
    try {
      const todo = await this.fastify.todoRepository.getById(id, userId);
      return todo;
    } catch (error) {
      throw error;
    }
  }

  async create(data, userId) {
    try {
      const task = data.task;

      const todo = await this.fastify.todoRepository.create(task, userId);
      return todo;
    } catch (error) {
      throw error;
    }
  }

  async update(data, userId) {
    try {
      const update = data.update;
      const to = data.to;
      // Todo Id
      const id = data.id;

      const todo = await this.fastify.todoRepository.update(
        update,
        to,
        id,
        userId
      );
      return todo;
    } catch (error) {
      throw error;
    }
  }

  async delete(id, userId) {
    try {
      const todo = await this.fastify.todoRepository.delete(id, userId);
      return todo;
    } catch (error) {
      throw error;
    }
  }
}

export default TodoService;
