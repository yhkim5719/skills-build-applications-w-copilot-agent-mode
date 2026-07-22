import mongoose from 'mongoose';
import { User } from '../models/user.js';
import { Team } from '../models/team.js';
import { Activity } from '../models/activity.js';
import { LeaderboardEntry } from '../models/leaderboard.js';
import { Workout } from '../models/workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.insertMany([
      {
        name: 'Maya Chen',
        email: 'maya.chen@example.com',
        role: 'captain',
        fitnessGoal: 'Marathon prep',
        city: 'Seattle',
      },
      {
        name: 'Jordan Alvarez',
        email: 'jordan.alvarez@example.com',
        role: 'member',
        fitnessGoal: 'Strength gain',
        city: 'Denver',
      },
      {
        name: 'Nia Brooks',
        email: 'nia.brooks@example.com',
        role: 'member',
        fitnessGoal: 'Mobility',
        city: 'Austin',
      },
    ]);

    await Team.insertMany([
      {
        name: 'Peak Pioneers',
        sport: 'running',
        members: users.map((user) => user.name),
        city: 'Seattle',
      },
      {
        name: 'Iron Circle',
        sport: 'strength',
        members: [users[1].name, users[2].name],
        city: 'Denver',
      },
    ]);

    await Activity.insertMany([
      {
        userId: users[0]._id.toString(),
        type: 'run',
        durationMinutes: 42,
        date: new Date('2026-07-20T06:30:00Z'),
        notes: 'Early sunrise run',
      },
      {
        userId: users[1]._id.toString(),
        type: 'strength',
        durationMinutes: 55,
        date: new Date('2026-07-21T18:00:00Z'),
        notes: 'Upper body session',
      },
      {
        userId: users[2]._id.toString(),
        type: 'yoga',
        durationMinutes: 35,
        date: new Date('2026-07-22T07:00:00Z'),
        notes: 'Recovery flow',
      },
    ]);

    await LeaderboardEntry.insertMany([
      { userId: users[0]._id.toString(), score: 1420, streak: 8, rank: 1 },
      { userId: users[1]._id.toString(), score: 1295, streak: 5, rank: 2 },
      { userId: users[2]._id.toString(), score: 1188, streak: 4, rank: 3 },
    ]);

    await Workout.insertMany([
      {
        name: 'Tempo Intervals',
        category: 'cardio',
        durationMinutes: 30,
        difficulty: 'advanced',
        target: 'endurance',
      },
      {
        name: 'Full Body Strength',
        category: 'strength',
        durationMinutes: 45,
        difficulty: 'intermediate',
        target: 'muscle gain',
      },
      {
        name: 'Flow Recovery',
        category: 'mobility',
        durationMinutes: 25,
        difficulty: 'beginner',
        target: 'recovery',
      },
    ]);

    console.log('Seed the octofit_db database with test data');
    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
