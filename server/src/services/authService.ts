import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/User';

export const registerUser = async (
  name: string,
  email: string,
  password: string,
  role: string
) => {
  const newUser = new User({ name, email, password, role });
  await newUser.save();
  return newUser;
};


export const loginUser = async (username: string, password: string) => {
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET!, {
    expiresIn: '1h'
  });
  return { user, token };
};
