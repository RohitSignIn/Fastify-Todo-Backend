import constructResponse from "../utility/constructResponse.js";

async function fetchAllUser(req, res) {
  try {
    const users = await this.userService.getAll();
    return res
      .code(200)
      .send(constructResponse(true, users, "Successfully fetched all users"));
  } catch (error) {
    console.log(error);
  }
}

async function fetchUserById(req, res) {
  try {
    const user = await this.userService.getById(req.userId);
    return res
      .code(200)
      .send(constructResponse(true, user, "Successfully fetch user"));
  } catch (error) {
    console.log(error);
  }
}

async function createUser(req, res) {
  try {
    const user = await this.userService.create(req.body);
    console.log(user);
    return res
      .code(201)
      .send(constructResponse(true, user, "Successfully created user"));
  } catch (error) {
    console.log(error);
  }
}

async function updateUser(req, res) {
  try {
    const user = await this.userService.update(req.body, req.userId);
    return res
      .code(201)
      .send(constructResponse(true, user, "Successfully updated user"));
  } catch (error) {
    console.log(error);
  }
}

async function deleteUser(req, res) {
  try {
    const user = await this.userService.delete(req.userId);
    return res
      .code(202)
      .send(constructResponse(true, {}, "Successfully deleted user"));
  } catch (error) {
    console.log(error);
  }
}

async function signinUser(req, res) {
  try {
    const token = await this.userService.signin(req.body);
    return res
      .code(200)
      .setCookie("token", token, {
        path: "/",
        secure: true, // send cookie over HTTPS only
        httpOnly: true,
        sameSite: false, // alternative CSRF protection
      })
      .send(constructResponse(true, {}, "Successfully authenticated"));
  } catch (error) {
    console.log(error);
  }
}

export {
  fetchAllUser,
  fetchUserById,
  createUser,
  updateUser,
  deleteUser,
  signinUser,
};
