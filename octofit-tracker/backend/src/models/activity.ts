import mongoose, { Schema, type Document, type Model } from 'mongoose';

export interface IActivity extends Document {
  userId: string;
  type: string;
  durationMinutes: number;
  date: Date;
  notes: string;
}

const activitySchema = new Schema<IActivity>({
  userId: { type: String, required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  date: { type: Date, required: true, default: Date.now },
  notes: { type: String, required: true },
});

export const Activity: Model<IActivity> = mongoose.model<IActivity>('Activity', activitySchema);
