import mongoose, { Schema, type Document, type Model } from 'mongoose';

export interface ITeam extends Document {
  name: string;
  sport: string;
  members: string[];
  city: string;
}

const teamSchema = new Schema<ITeam>({
  name: { type: String, required: true, unique: true },
  sport: { type: String, required: true },
  members: [{ type: String, required: true }],
  city: { type: String, required: true },
});

export const Team: Model<ITeam> = mongoose.model<ITeam>('Team', teamSchema);
