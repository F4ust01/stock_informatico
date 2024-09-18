"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovementLog = exports.getMovementLogById = exports.createMovementLog = exports.getMovementLogs = void 0;
const MovementLogService_1 = __importDefault(require("../services/MovementLogService"));
const getMovementLogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const logs = yield MovementLogService_1.default.findAll();
        if (!logs || logs.length === 0) {
            throw {
                statusCode: 404,
                status: "Not Found",
                message: "No se han encontrado movimientos",
            };
        }
        return res.json(logs);
    }
    catch (err) {
        return res.status(err.statusCode || 500).json({
            message: err.message,
            status: err.status,
        });
    }
});
exports.getMovementLogs = getMovementLogs;
const createMovementLog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield MovementLogService_1.default.create(req.body);
        return res.status(201).json({
            message: "Movimiento registrado",
        });
    }
    catch (err) {
        return res.status(err.statusCode || 500).json({
            message: err.message,
            status: err.status,
        });
    }
});
exports.createMovementLog = createMovementLog;
const getMovementLogById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const log = yield MovementLogService_1.default.findById(req.params.id);
        if (!log) {
            throw {
                statusCode: 404,
                status: "Not Found",
                message: "Movimiento no encontrado",
            };
        }
        return res.json(log);
    }
    catch (err) {
        return res.status(err.statusCode || 500).json({
            message: err.message,
            status: err.status,
        });
    }
});
exports.getMovementLogById = getMovementLogById;
const deleteMovementLog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield MovementLogService_1.default.delete(req.params.id);
        return res.status(204).json({
            message: "Movimiento eliminado",
        });
    }
    catch (err) {
        return res.status(err.statusCode || 500).json({
            message: err.message,
            status: err.status,
        });
    }
});
exports.deleteMovementLog = deleteMovementLog;
//# sourceMappingURL=movementLog.controllers.js.map