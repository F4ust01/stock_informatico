"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum: ["available", "assigned", "maintenance"],
        required: true,
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    purchaseDate: {
        type: Date,
        default: Date.now,
    },
    assignedTo: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        default: null,
    },
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)('products', ProductSchema);
//# sourceMappingURL=Product.js.map