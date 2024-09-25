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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const conf_1 = require("../config/conf");
const productos_routes_1 = __importDefault(require("../routes/productos.routes"));
const auth_routes_1 = __importDefault(require("../routes/auth.routes"));
const movementLogRoutes_1 = __importDefault(require("../routes/movementLogRoutes"));
const connection_1 = require("../db/connection");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = conf_1.PORT || 3000;
        this.dbConnect();
        this.middlewares();
        this.routes();
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, connection_1.dbConnection)();
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use("/api/products", productos_routes_1.default); // Ruta para productos
        this.app.use("/api/auth", auth_routes_1.default); // Ruta para autenticación
        this.app.use("/api/movement", movementLogRoutes_1.default); //Ruta para movimientos
    }
    listen() {
        this.app.listen(this.port, () => console.log(`Server on http://127.0.0.1:${this.port}`));
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map