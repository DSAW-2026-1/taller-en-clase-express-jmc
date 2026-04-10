import { verifyToken } from "./_utils.js";

export default function handler(req, res) {
  try {
    const user = verifyToken(req);

    return res.status(200).json({
      message: `Bienvenido ${user.user.toLowerCase()}`,
      role: user.role
    });
  } catch (error) {
    return res.status(401).json({
      message: "No tienes permiso para esto"
    });
  }
}
