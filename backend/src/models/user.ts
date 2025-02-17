import mongoose from "mongoose";
import { UserType } from "../shared/types";
import bcryptjs from 'bcryptjs';
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

userSchema.pre('save', async function(next) {
  if(this.isModified('password')) {
    this.password = await bcryptjs.hashSync(this.password, 10);
  }
  next();
});

const User = mongoose.model<UserType>('User', userSchema);

export default User;



