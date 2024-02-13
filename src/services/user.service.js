import getPasswordHashed from "../utility/getPasswordHashed.js";
import passwordAuth from "../utility/passwordAuth.js";

class UserService {
  constructor(fastify) {
    this.fastify = fastify;
  }

  async getAll() {
    try {
      const users = await this.fastify.userRepository.getAll();
      return users;
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      const user = await this.fastify.userRepository.getById(id);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async create(data) {
    try {
      const name = data.name;
      const email = data.email;
      const password = await getPasswordHashed(data.password);

      console.log(password, "jshec");
      const user = await this.fastify.userRepository.create(
        name,
        email,
        password
      );
      return user;
    } catch (error) {
      throw error;
    }
  }

  async update(data) {
    try {
      const update = data.update;
      let to = data.to;
      const id = data.id;

      if (update == "password") {
        to = await getPasswordHashed(to);
      }

      const user = await this.fastify.userRepository.update(update, to, id);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const user = await this.fastify.userRepository.delete(id);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async signin(data) {
    try {
      const user = await this.fastify.userRepository.getByEmail(data.email);
      if (user) {
        const authenticated = await passwordAuth(data.password, user.password);
        if (!authenticated) {
          throw new Error("Unauthorized");
        }
      } else {
        throw new Error("Unauthorized");
      }
      return user;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
