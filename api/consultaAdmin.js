import { verifyToken } from "./_utils.js";

export default function handler(req, res) {
  try {
    const user = verifyToken(req);

    if (user.role !== "ADMIN") {
      return res.status(401).json({
        message: "No tienes permiso para esto"
      });
    }

    return res.status(200).json({
      message: `Bienvenido ${user.user.toLowerCase()}`
    });
  } catch (error) {
    return res.status(401).json({
      message: "No tienes permiso para esto"
    });
  }
}
