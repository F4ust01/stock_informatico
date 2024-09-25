"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URI = exports.PORT = void 0;
exports.PORT = process.env.PORT || "3000"; // Valor por defecto
exports.URI = process.env.URI || "mongodb://localhost:27017/inventoryDB"; // Si no está definido, asignamos una cadena vacía
//# sourceMappingURL=conf.js.map