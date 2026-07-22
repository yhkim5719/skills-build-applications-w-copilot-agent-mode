import mongoose, { Schema } from 'mongoose';
const activitySchema = new Schema({
    userId: { type: String, required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    date: { type: Date, required: true, default: Date.now },
    notes: { type: String, required: true },
});
export const Activity = mongoose.model('Activity', activitySchema);
