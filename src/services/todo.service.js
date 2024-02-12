class TodoService {
  // constructor(UserRepository) {
  //   this.UserRepository = UserRepository;
  // }

  constructor(fastify) {
    this.fastify = fastify;
  }

  // async getAll() {
  //   const users = await this.UserRepository.getAll();
  //   return users;
  // }

  async getAll() {
    // using promise wrapper because fastify mysql query is not a promise directly
    // return new Promise((resolve, reject) => {
    //   this.fastify.mysql.query("SELECT * From user", function (err, result) {
    //     if (err) {
    //       reject(err);
    //     }
    //     resolve(result);
    //   });
    // });

    // Prisma
    const users = await this.fastify.prisma.User.findMany();
    console.log("YO");
    return users;
  }
}

export default TodoService;
