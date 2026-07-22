import mongoose, { Schema } from 'mongoose';
const workoutSchema = new Schema({
    name: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    difficulty: { type: String, required: true },
    target: { type: String, required: true },
});
export const Workout = mongoose.model('Workout', workoutSchema);
