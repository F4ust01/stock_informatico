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
const Product_js_1 = __importDefault(require("../models/Product.js"));
class ProductService {
    constructor() { }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Product_js_1.default.find();
        });
    }
    create(product) {
        return __awaiter(this, void 0, void 0, function* () {
            // Usar ProductType para tipar el parámetro
            return yield Product_js_1.default.create(product);
        });
    }
    update(productId, productData) {
        return __awaiter(this, void 0, void 0, function* () {
            // Usar Partial<ProductType> para permitir actualizaciones parciales
            return yield Product_js_1.default.findByIdAndUpdate(productId, productData, {
                new: true,
            });
        });
    }
    delete(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Product_js_1.default.findByIdAndDelete(productId);
        });
    }
}
exports.default = new ProductService();
//# sourceMappingURL=ProductService.js.map