// import UserRepository from "../repository/user.repository.js";
// import UserService from "../services/user.service.js";

// using traditional function to get this instance correctly or we can say to get fastify instance
async function fetchAllUser(req, reply) {
  const users = await this.userService.getAll();
  console.log(users);
  return { success: users };
}

const fetchUserById = (req, reply) => {
  return { ping: "success" };
};

const createUser = (req, reply) => {
  return { ping: "success" };
};

const updateUser = (req, reply) => {
  return { ping: "success" };
};

const deleteUser = (req, reply) => {
  return { ping: "success" };
};

export { fetchAllUser, fetchUserById, createUser, updateUser, deleteUser };
