import { Request, Response } from "express";
import UserService from "../services/UserService";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserService.findAll();
    if (!users || users.length === 0) {
      throw {
        statusCode: 404,
        status: "Not Found",
        message: "No se han encontrado usuarios",
      };
    }
    return res.json(users);
  } catch (err: any) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
      status: err.status,
    });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await UserService.findById(req.params.id);
    if (!user) {
      throw {
        statusCode: 404,
        status: "Not Found",
        message: "Usuario no encontrado",
      };
    }
    return res.json(user);
  } catch (err: any) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
      status: err.status,
    });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    await UserService.create(req.body);
    return res.status(201).json({
      message: "Usuario creado",
    });
  } catch (err: any) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
      status: err.status,
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await UserService.update(req.params.id, req.body);
    return res.json(updatedUser);
  } catch (err: any) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
      status: err.status,
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await UserService.delete(req.params.id);
    return res.status(204).json({
      message: "Usuario eliminado",
    });
  } catch (err: any) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
      status: err.status,
    });
  }
};
