import mongoose, { Schema, type Document, type Model } from 'mongoose';

export interface IWorkout extends Document {
  name: string;
  category: string;
  durationMinutes: number;
  difficulty: string;
  target: string;
}

const workoutSchema = new Schema<IWorkout>({
  name: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  difficulty: { type: String, required: true },
  target: { type: String, required: true },
});

export const Workout: Model<IWorkout> = mongoose.model<IWorkout>('Workout', workoutSchema);
