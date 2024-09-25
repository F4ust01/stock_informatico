import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Obtener el token del header

  if (!token) {
    return res
      .status(401)
      .json({ message: "Acceso denegado. No hubo token proporcionado." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!); // Verificar el token
    req.user = decoded; // Guardar la info del usuario en req.user
    next();
  } catch (err) {
    return res.status(400).json({ message: "Token inválido." });
  }
};
