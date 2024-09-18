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
exports.login = exports.register = void 0;
const UserService_1 = __importDefault(require("../services/UserService"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        // Verificar si el usuario ya existe
        const userExists = yield UserService_1.default.findByEmail(email);
        if (userExists) {
            return res.status(400).json({ message: "El correo electrónico ya está en uso." });
        }
        // Crear el usuario, asignando el rol por defecto "user"
        const newUser = yield UserService_1.default.create({ name, email, password, role: "user" });
        res.status(201).json({ message: "Usuario registrado con éxito" });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        // Verificar si el usuario existe
        const user = yield UserService_1.default.findByEmail(email);
        if (!user) {
            return res.status(400).json({ message: "Correo electrónico o contraseña incorrectos" });
        }
        // Verificar la contraseña
        const validPassword = yield bcryptjs_1.default.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: "Correo electrónico o contraseña incorrectos" });
        }
        // Generar el token JWT
        const token = jsonwebtoken_1.default.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ token });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.login = login;
//# sourceMappingURL=auth.controllers.js.map