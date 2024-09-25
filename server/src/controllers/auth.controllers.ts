import { Request, Response } from "express";
import UserService from "../services/UserService";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    // Verificar si el usuario ya existe
    const userExists = await UserService.findByEmail(email);
    if (userExists) {
      return res.status(400).json({ message: "El correo electrónico ya está en uso." });
    }

    // Crear el usuario, asignando el rol por defecto "user"
    const newUser = await UserService.create({ name, email, password, role: "user" });

    res.status(201).json({ message: "Usuario registrado con éxito" });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Verificar si el usuario existe
    const user = await UserService.findByEmail(email);
    if (!user) {
      return res.status(400).json({ message: "Correo electrónico o contraseña incorrectos" });
    }

    // Verificar la contraseña
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Correo electrónico o contraseña incorrectos" });
    }

    // Generar el token JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );
    res.json({ token });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
