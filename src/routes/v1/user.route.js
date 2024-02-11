const {
  fetchAllUser,
  fetchUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user.controller");

const userRoute = (fastify, options, done) => {
  // Get all Users
  fastify.get("/", fetchAllUser);

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

module.exports = userRoute;
