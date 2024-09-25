import { Request, Response } from "express";
import MovementLogService from "../services/MovementLogService";

export const getMovementLogs = async (req: Request, res: Response) => {
  try {
    const logs = await MovementLogService.findAll();
    if (!logs || logs.length === 0) {
      throw {
        statusCode: 404,
        status: "Not Found",
        message: "No se han encontrado movimientos",
      };
    }
    return res.json(logs);
  } catch (err: any) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
      status: err.status,
    });
  }
};

export const createMovementLog = async (req: Request, res: Response) => {
  try {
    await MovementLogService.create(req.body);
    return res.status(201).json({
      message: "Movimiento registrado",
    });
  } catch (err: any) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
      status: err.status,
    });
  }
};

export const getMovementLogById = async (req: Request, res: Response) => {
  try {
    const log = await MovementLogService.findById(req.params.id);
    if (!log) {
      throw {
        statusCode: 404,
        status: "Not Found",
        message: "Movimiento no encontrado",
      };
    }
    return res.json(log);
  } catch (err: any) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
      status: err.status,
    });
  }
};

export const deleteMovementLog = async (req: Request, res: Response) => {
  try {
    await MovementLogService.delete(req.params.id);
    return res.status(204).json({
      message: "Movimiento eliminado",
    });
  } catch (err: any) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
      status: err.status,
    });
  }
};
