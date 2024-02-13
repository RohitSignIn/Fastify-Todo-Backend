import bcrypt from "bcrypt";

export default function passwordAuth(userPassword, passwordHash) {
  return new Promise((res, rej) => {
    bcrypt.compare(userPassword, passwordHash, function (err, result) {
      if (result === false) rej("UnauthorizedAccessError");
      res(true);
    });
  });
}
