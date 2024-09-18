"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    stock: Number,
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)('products', ProductSchema);
//# sourceMappingURL=Product.js.map