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
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProducts = void 0;
const ProductService_1 = __importDefault(require("../services/ProductService"));
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield ProductService_1.default.findAll();
        if (products.length === 0 || !products) {
            throw {
                statusCode: 404,
                status: "Not Found",
                message: "No se han encontrado productos",
            };
        }
        return res.json(products);
    }
    catch (err) {
        return res.status(err.statusCode || 500).json({
            message: err.message,
            status: err.status,
        });
    }
});
exports.getProducts = getProducts;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield ProductService_1.default.create(req.body);
        return res.status(201).json({
            message: "Producto creado",
        });
    }
    catch (err) {
        return res.status(err.statusCode || 500).json({
            message: err.message,
            status: err.status,
        });
    }
});
exports.createProduct = createProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedProduct = yield ProductService_1.default.update(req.params.id, req.body);
        if (!updatedProduct) {
            throw {
                statusCode: 404,
                status: "Not Found",
                message: "Producto no encontrado",
            };
        }
        return res.json({
            message: "Producto actualizado",
            product: updatedProduct,
        });
    }
    catch (err) {
        return res.status(err.statusCode || 500).json({
            message: err.message,
            status: err.status,
        });
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedProduct = yield ProductService_1.default.delete(req.params.id);
        if (!deletedProduct) {
            throw {
                statusCode: 404,
                status: "Not Found",
                message: "Producto no encontrado",
            };
        }
        return res.status(204).json({
            message: "Producto eliminado",
        });
    }
    catch (err) {
        return res.status(err.statusCode || 500).json({
            message: err.message,
            status: err.status,
        });
    }
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=productos.controllers.js.map