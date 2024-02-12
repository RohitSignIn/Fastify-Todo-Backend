class UserService {
  constructor(fastify) {
    this.fastify = fastify;
  }

  async getAll() {
    try {
      const users = await this.fastify.userRepository.getAll();
      return users;
    } catch (error) {
      return error;
    }
  }

  async getById(id) {
    try {
      const user = await this.fastify.userRepository.getById(id);
      return user;
    } catch (error) {
      return error;
    }
  }

  async create(data) {
    try {
      const name = data.name;
      const email = data.email;
      const password = data.password;

      const user = await this.fastify.userRepository.create(
        name,
        email,
        password
      );
      return user;
    } catch (error) {
      return error;
    }
  }

  async update(data) {
    try {
      const update = data.update;
      const to = data.to;
      const id = data.id;

      const user = await this.fastify.userRepository.update(update, to, id);
      return user;
    } catch (error) {
      return error;
    }
  }

  async delete(id) {
    try {
      const user = await this.fastify.userRepository.delete(id);
      return user;
    } catch (error) {
      return error;
    }
  }
}

export default UserService;
