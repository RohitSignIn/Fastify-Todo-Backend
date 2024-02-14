import {
  // fetchAllUser,
  fetchUserById,
  createUser,
  updateUser,
  deleteUser,
  signinUser,
} from "../../controllers/user.controller.js";
import validateJWT from "../../utility/validateJWT.js";

const userRoute = (fastify, options, done) => {
  // // Get all Users
  // fastify.get("/", fetchAllUser);

  // Get User By Id
  fastify.get(
    "/",
    {
      preHandler: validateJWT,
    },
    fetchUserById
  );

  // Create User
  fastify.post("/", createUser);

  // Update User
  fastify.put(
    "/",
    {
      preHandler: validateJWT,
    },
    updateUser
  );

  // Delete User
  fastify.delete(
    "/",
    {
      preHandler: validateJWT,
    },
    deleteUser
  );

  // Signin User
  fastify.post("/signin", signinUser);

  done();
};

export default userRoute;
