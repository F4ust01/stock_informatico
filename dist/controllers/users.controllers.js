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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const UserService_1 = __importDefault(require("../services/UserService"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield UserService_1.default.findAll();
        if (!users || users.length === 0) {
            throw {
                statusCode: 404,
                status: "Not Found",
                message: "No se han encontrado usuarios",
            };
        }
        return res.json(users);
    }
    catch (err) {
        return res.status(err.statusCode || 500).json({
            message: err.message,
            status: err.status,
        });
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield UserService_1.default.findById(req.params.id);
        if (!user) {
            throw {
                statusCode: 404,
                status: "Not Found",
                message: "Usuario no encontrado",
            };
        }
        return res.json(user);
    }
    catch (err) {
        return res.status(err.statusCode || 500).json({
            message: err.message,
            status: err.status,
        });
    }
});
exports.getUserById = getUserById;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield UserService_1.default.create(req.body);
        return res.status(201).json({
            message: "Usuario creado",
        });
    }
    catch (err) {
        return res.status(err.statusCode || 500).json({
            message: err.message,
            status: err.status,
        });
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedUser = yield UserService_1.default.update(req.params.id, req.body);
        return res.json(updatedUser);
    }
    catch (err) {
        return res.status(err.statusCode || 500).json({
            message: err.message,
            status: err.status,
        });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield UserService_1.default.delete(req.params.id);
        return res.status(204).json({
            message: "Usuario eliminado",
        });
    }
    catch (err) {
        return res.status(err.statusCode || 500).json({
            message: err.message,
            status: err.status,
        });
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.controllers.js.map