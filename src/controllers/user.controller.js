import UserRepository from "../repository/user.repository.js";
import UserService from "../services/user.service.js";

const userService = new UserService(new UserRepository());

const fetchAllUser = async (req, reply) => {
  try {
    const users = await userService.getAll();
    return { users: users };
  } catch (error) {
    console.log(error);
  }
};

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
