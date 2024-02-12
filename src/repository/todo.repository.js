class TodoRepository {
  async getAll() {
    return new Promise((resolve, reject) => {
      this.fastify.mysql.query(
        "SELECT * From user",
        function onResult(err, result) {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    });

    // const users = await fastify.prisma.User.findMany();
    // return users;
  }
}

export default TodoRepository;
