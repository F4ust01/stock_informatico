import { Schema, model } from "mongoose";

const MovementLogSchema = new Schema({
  equipment: {
    type: Schema.Types.ObjectId,
    ref: "Equipment",
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
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

export default model("MovementLog", MovementLogSchema);
