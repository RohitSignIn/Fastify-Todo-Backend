import { getAll } from "../repository/user.repository.js";

export const getAllService = async () => {
  const users = await getAll();
  return users;
};

// class UserService {
//   controller(UserRepository) {
//     this.UserRepository = UserRepository;
//   }

//   async getAll() {
//     const users = await this.UserRepository.getAll();
//     return users;
//   }
// }

// export default UserService;
