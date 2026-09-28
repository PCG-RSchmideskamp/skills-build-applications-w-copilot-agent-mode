import { Router } from 'express';
import { Model } from 'mongoose';
import { apiBaseUrl } from '../config/api';

type ResourceName = 'users' | 'teams' | 'activities' | 'leaderboard' | 'workouts';

export function createResourceRouter<DocumentType>(resource: ResourceName, collection: Model<DocumentType>) {
  const router = Router();

  router.get('/', async (_request, response) => {
    const data = await collection.find().lean();

    response.json({
      resource,
      url: `${apiBaseUrl}/api/${resource}/`,
      data,
    });
  });

  return router;
}