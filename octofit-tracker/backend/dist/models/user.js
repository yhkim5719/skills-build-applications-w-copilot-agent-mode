import mongoose, { Schema } from 'mongoose';
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    fitnessGoal: { type: String, required: true },
    city: { type: String, required: true },
});
export const User = mongoose.model('User', userSchema);
