import jwt from "jsonwebtoken";

const SECRET_KEY = "mi_clave_secreta";

const users = [
  { user: "ADMIN", password: "ADMIN", role: "ADMIN" },
  { user: "USER", password: "USER", role: "USER" }
];

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { user, password } = req.body;

  if (!user || !password) {
    return res.status(400).json({
      message: "Debe enviar user y password"
    });
  }

  const foundUser = users.find(
    (u) => u.user === user && u.password === password
  );

  if (!foundUser) {
    return res.status(401).json({
      message: "Credenciales inválidas"
    });
  }

  const token = jwt.sign(
    { user: foundUser.user, role: foundUser.role },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  return res.status(200).json({
    message: `Bienvenido ${foundUser.user.toLowerCase()}`,
    role: foundUser.role,
    token
  });
}
