import fastify from "fastify";

class UserRepository {
  async getAll() {
    let res = "";
    fastify.mysql.query("SELECT * From user", function onResult(err, result) {
      res = result;
    });

    return res;

    // const users = await fastify.prisma.User.findMany();
    // return users;
  }
}

export default UserRepository;
