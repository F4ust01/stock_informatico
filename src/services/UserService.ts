import User from "../models/User";
import { InferSchemaType } from "mongoose";

// Inferir el tipo del esquema
type UserType = InferSchemaType<typeof User.schema>;

// Definir un tipo para el nuevo usuario que no incluya createdAt y updatedAt
type NewUserType = Omit<UserType, "createdAt" | "updatedAt">;

class UserService {
  constructor() {}

  async findAll() {
    return await User.find();
  }

  async findById(id: string) {
    return await User.findById(id);
  }

  async findByEmail(email: string) {
    return await User.findOne({ email });
  }

  async create(user: Partial<NewUserType>) {
    return await User.create(user);
  }

  async update(id: string, userData: Partial<UserType>) {
    return await User.findByIdAndUpdate(id, userData, { new: true });
  }

  async delete(id: string) {
    return await User.findByIdAndDelete(id);
  }
}

export default new UserService();
