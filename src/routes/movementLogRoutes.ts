import { Router } from "express";
import {
  getMovementLogs,
  createMovementLog,
  getMovementLogById,
  deleteMovementLog,
} from "../controllers/movementLog.controllers";

const router = Router();

// Ruta para obtener todos los logs de movimientos
router.get("/", getMovementLogs);

// Ruta para crear un nuevo log de movimiento
router.post("/", createMovementLog);

// Ruta para obtener un log de movimiento por su ID
router.get("/:id", getMovementLogById);

// Ruta para eliminar un log de movimiento por su ID
router.delete("/:id", deleteMovementLog);

export default router;
