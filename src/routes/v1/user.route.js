import {
  fetchAllUser,
  fetchUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../../controllers/user.controller.js";

const userRoute = (fastify, options, done) => {
  // Get all Users

  fastify.get("/", fetchAllUser);

  // fastify.get("/", function (req, reply) {
  //   fastify.mysql.query("SELECT * From user", function onResult(err, result) {
  //     reply.send(err || result);
  //   });
  // });

  // fastify.get("/", async function (request, reply) {
  //   const users = await fastify.prisma.User.findMany();
  //   reply.send(users);
  // });

  // Get User By Id
  fastify.get("/:id", fetchUserById);

  // Create User
  fastify.post("/", createUser);

  // Update User
  fastify.put("/", updateUser);

  // Delete User
  fastify.delete("/:id", deleteUser);

  done();
};

export default userRoute;
