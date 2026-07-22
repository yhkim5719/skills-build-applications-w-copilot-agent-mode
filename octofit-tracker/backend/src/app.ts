import express, { type Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import './config/database.js';
import { User } from './models/user.js';
import { Team } from './models/team.js';
import { Activity } from './models/activity.js';
import { LeaderboardEntry } from './models/leaderboard.js';
import { Workout } from './models/workout.js';

dotenv.config();

const buildRoutes = (app: Express) => {
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', service: 'octofit-tracker-backend' });
  });

  app.get('/api/users/', async (_req, res) => {
    const users = await User.find({}).lean();
    res.json(users);
  });

  app.get('/api/teams/', async (_req, res) => {
    const teams = await Team.find({}).lean();
    res.json(teams);
  });

  app.get('/api/activities/', async (_req, res) => {
    const activities = await Activity.find({}).lean();
    res.json(activities);
  });

  app.get('/api/leaderboard/', async (_req, res) => {
    const leaderboard = await LeaderboardEntry.find({}).lean();
    res.json(leaderboard);
  });

  app.get('/api/workouts/', async (_req, res) => {
    const workouts = await Workout.find({}).lean();
    res.json(workouts);
  });
};

export const createApp = (): Express => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  buildRoutes(app);
  return app;
};

export const app = createApp();
