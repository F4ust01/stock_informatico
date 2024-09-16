import MovementLog from "../models/MovementLog";
import { InferSchemaType } from "mongoose";

// Inferir el tipo del log basado en el esquema
type MovementLogType = InferSchemaType<typeof MovementLog.schema>;

class MovementLogService {
  constructor() {}

  async findAll() {
    return await MovementLog.find().populate("equipment user");
  }

  async create(movementLog: MovementLogType) {
    return await MovementLog.create(movementLog);
  }

  async findById(id: string) {
    return await MovementLog.findById(id).populate("equipment user");
  }

  async delete(id: string) {
    return await MovementLog.findByIdAndDelete(id);
  }
}

export default new MovementLogService();
