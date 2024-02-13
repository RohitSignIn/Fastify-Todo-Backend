class UserRepository {
  constructor(fastify) {
    this.fastify = fastify;
  }

  async getAll() {
    try {
      const users = await this.fastify.prisma.User.findMany();
      return users;
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      // findUniqueOrThrow throws "NotFoundError" if not found
      const user = await this.fastify.prisma.User.findUniqueOrThrow({
        where: { id: parseInt(id) },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async getByEmail(email) {
    try {
      // findUniqueOrThrow throws "NotFoundError" if not found
      const user = await this.fastify.prisma.User.findUniqueOrThrow({
        where: { email: email },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async create(name, email, password) {
    try {
      const user = await this.fastify.prisma.User.create({
        data: {
          name,
          email,
          password,
        },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async update(update, to, id) {
    try {
      const user = await this.fastify.prisma.User.update({
        where: { id },
        data: {
          [update]: to,
        },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const user = await this.fastify.prisma.User.delete({
        where: { id: parseInt(id) },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
}

export default UserRepository;
