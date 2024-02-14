import constructResponse from "./constructResponse.js";

export default async function validateJWT(request, reply, done) {
  try {
    const user = await request.jwtVerify();
    request.userId = user.userId;
  } catch (error) {
    reply
      .code(401)
      .send(
        constructResponse(false, {}, "Unauthorized access, try signin first")
      );
  }

  done();
}
