"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MovementLogSchema = new mongoose_1.Schema({
    equipment: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    changeDate: {
        type: Date,
        default: Date.now,
    },
    changeType: {
        type: String,
        enum: ["assigned", "maintenance", "location-change"],
        required: true,
    },
    details: {
        type: String,
        trim: true,
    },
});
exports.default = (0, mongoose_1.model)("MovementLog", MovementLogSchema);
//# sourceMappingURL=MovementLog.js.map