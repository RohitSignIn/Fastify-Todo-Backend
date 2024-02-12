import bcrypt from "bcrypt";

export default function getPasswordHashed(password) {
  return new Promise((res, rej) => {
    bcrypt.hash(password, 10, function (err, hash) {
      if (err) rej(err);
      res(hash);
    });
  });
}
