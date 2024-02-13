import {
  fetchAllUser,
  fetchUserById,
  createUser,
  updateUser,
  deleteUser,
  signinUser,
} from "../../controllers/user.controller.js";

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

  // Signin User
  fastify.post("/signin", signinUser);

  done();
};

export default userRoute;
