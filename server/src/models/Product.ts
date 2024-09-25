import { model, Schema } from 'mongoose';


const ProductSchema = new Schema(
  {
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
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);
export default model('products', ProductSchema);