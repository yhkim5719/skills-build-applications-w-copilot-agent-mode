import mongoose, { Schema } from 'mongoose';
const leaderboardSchema = new Schema({
    userId: { type: String, required: true, unique: true },
    score: { type: Number, required: true },
    streak: { type: Number, required: true },
    rank: { type: Number, required: true },
});
export const LeaderboardEntry = mongoose.model('LeaderboardEntry', leaderboardSchema);
