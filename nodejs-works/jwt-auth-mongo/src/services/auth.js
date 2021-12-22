import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SALT_ROUNDS = 10;

export async function hash(password) {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(hashedPassword);
  return hashedPassword;
}

export async function compare(password, hashed) {
  const match = await bcrypt.compare(password, hashed);
  return match;
}

export function generateAccessToken(userEmail) {
  return jwt.sign(userEmail, process.env.TOKEN_SECRET, { expiresIn: "1800s" });
}

export function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
console.log("token ",token);
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    console.log(err);

    if (err) return res.sendStatus(403);

    console.log("Going to next function... ");
    next();
  });
}
