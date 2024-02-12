class UserRepository {
  constructor(fastify) {
    this.fastify = fastify;
  }

  async getAll() {
    try {
      const users = await this.fastify.prisma.User.findMany();
      return users;
    } catch (error) {
      return error;
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
      return error;
    }
  }

  async create(name, email, password) {
    try {
      const user = await this.fastify.prisma.User.create({
        data: {
          name: name,
          email: email,
          password: password,
        },
      });
      return user;
    } catch (error) {
      return error;
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
      return error;
    }
  }

  async delete(id) {
    try {
      const user = await this.fastify.prisma.User.delete({
        where: { id: parseInt(id) },
      });
      return user;
    } catch (error) {
      return error;
    }
  }
}

export default UserRepository;
