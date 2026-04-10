import jwt from "jsonwebtoken";

const SECRET_KEY = "mi_clave_secreta";

export function verifyToken(req) {
  const auth = req.headers.authorization;

  if (!auth || !auth.startsWith("Bearer ")) {
    throw new Error("No token");
  }

  const token = auth.split(" ")[1];
  return jwt.verify(token, SECRET_KEY);
}
