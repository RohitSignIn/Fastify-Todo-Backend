class TodoRepository {
  constructor(fastify) {
    this.fastify = fastify;
  }

  async getAll() {
    try {
      const todos = await this.fastify.prisma.Todo.findMany();
      return todos;
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      // findUniqueOrThrow throws "NotFoundError" if not found
      const todo = await this.fastify.prisma.Todo.findUniqueOrThrow({
        where: { id: parseInt(id) },
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

  async update(update, to, id) {
    try {
      const todo = await this.fastify.prisma.Todo.update({
        where: { id },
        data: {
          [update]: to,
        },
      });
      return todo;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const todo = await this.fastify.prisma.Todo.delete({
        where: { id: parseInt(id) },
      });
      return todo;
    } catch (error) {
      throw error;
    }
  }
}

export default TodoRepository;
