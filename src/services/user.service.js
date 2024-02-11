class UserService {
  constructor(UserRepository) {
    this.UserRepository = UserRepository;
  }

  async getAll() {
    const users = await this.UserRepository.getAll();
    return users;
  }
}

export default UserService;
