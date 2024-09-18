"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movementLog_controllers_1 = require("../controllers/movementLog.controllers");
const router = (0, express_1.Router)();
// Ruta para obtener todos los logs de movimientos
router.get("/", movementLog_controllers_1.getMovementLogs);
// Ruta para crear un nuevo log de movimiento
router.post("/", movementLog_controllers_1.createMovementLog);
// Ruta para obtener un log de movimiento por su ID
router.get("/:id", movementLog_controllers_1.getMovementLogById);
// Ruta para eliminar un log de movimiento por su ID
router.delete("/:id", movementLog_controllers_1.deleteMovementLog);
exports.default = router;
//# sourceMappingURL=movementLogRoutes.js.map