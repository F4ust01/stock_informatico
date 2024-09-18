"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const EquipmentSchema = new mongoose_1.Schema({
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
        default: "available",
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    purchaseDate: {
        type: Date,
        required: true,
    },
    assignedTo: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        default: null,
    },
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)("Equipment", EquipmentSchema);
//# sourceMappingURL=Equipment.js.map