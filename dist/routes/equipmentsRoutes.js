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
const authMiddleware_1 = require("../middlewares/authMiddleware");
const Equipment_1 = __importDefault(require("../models/Equipment"));
const router = express_1.default.Router();
router.get('/', authMiddleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const equipment = yield Equipment_1.default.find();
    res.json(equipment);
}));
router.post('/', authMiddleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, status, location, purchaseDate } = req.body;
    const newEquipment = new Equipment_1.default({ name, status, location, purchaseDate });
    yield newEquipment.save();
    res.status(201).json(newEquipment);
}));
router.put('/:id', authMiddleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedEquipment = yield Equipment_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedEquipment);
}));
router.delete('/:id', authMiddleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Equipment_1.default.findByIdAndDelete(req.params.id);
    res.status(204).end();
}));
exports.default = router;
//# sourceMappingURL=equipmentsRoutes.js.map