"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productos_controllers_1 = require("../controllers/productos.controllers");
const router = (0, express_1.Router)();
// Obtener todos los productos
router.get("/products", productos_controllers_1.getProducts);
// Crear un nuevo producto
router.post("/product", productos_controllers_1.createProduct);
// Actualizar un producto existente por ID
router.put("/product/:id", productos_controllers_1.updateProduct);
// Eliminar un producto existente por ID
router.delete("/product/:id", productos_controllers_1.deleteProduct);
exports.default = router;
//# sourceMappingURL=productos.routes.js.map