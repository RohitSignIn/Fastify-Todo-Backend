class TodoRepository {
  constructor(fastify) {
    this.fastify = fastify;
  }

  async getAll(userId) {
    try {
      const todos = await this.fastify.prisma.Todo.findMany({
        where: { userId: userId },
      });
      return todos;
    } catch (error) {
      throw error;
    }
  }

  async getById(id, userId) {
    try {
      const todo = await this.fastify.prisma.Todo.findMany({
        where: {
          id: parseInt(id),
          userId,
        },
      });
      return todo;
    } catch (error) {
      throw error;
    }
  }

  async create(task, userId) {
    try {
      const todo = await this.fastify.prisma.Todo.create({
        data: {
          task,
          // STATUS CAN BE EITHER "PENDING" OR "COMPLETED" initally "PENDING"
          status: "PENDING",
          userId,
        },
      });
      return todo;
    } catch (error) {
      throw error;
    }
  }

  async update(update, to, id, userId) {
    try {
      const todo = await this.fastify.prisma.Todo.update({
        where: {
          id: parseInt(id),
          userId,
        },
        data: {
          [update]: to,
        },
      });
      return todo;
    } catch (error) {
      throw error;
    }
  }

  async delete(id, userId) {
    try {
      console.log(id, userId);
      const todo = await this.fastify.prisma.Todo.delete({
        where: {
          id: parseInt(id),
          userId,
        },
      });
      return todo;
    } catch (error) {
      throw error;
    }
  }
}

export default TodoRepository;
