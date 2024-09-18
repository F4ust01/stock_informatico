"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productos_controllers_1 = require("../controllers/productos.controllers");
const router = (0, express_1.Router)();
router.get('/products', productos_controllers_1.getProducts);
router.post('/product', productos_controllers_1.createProduct);
exports.default = router;
//# sourceMappingURL=productos.routes.js.map