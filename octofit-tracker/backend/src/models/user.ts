import mongoose, { Schema, type Document, type Model } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  role: string;
  fitnessGoal: string;
  city: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  fitnessGoal: { type: String, required: true },
  city: { type: String, required: true },
});

export const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);
