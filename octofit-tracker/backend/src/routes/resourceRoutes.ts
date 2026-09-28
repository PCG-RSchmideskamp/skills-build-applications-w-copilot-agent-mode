import { Router } from 'express';
import { Model } from 'mongoose';

type ResourceName = 'users' | 'teams' | 'activities' | 'leaderboard' | 'workouts';

export function createResourceRouter<DocumentType>(resource: ResourceName, collection: Model<DocumentType>) {
  const router = Router();

  router.get('/', async (request, response) => {
    const data = await collection.find().lean();

    response.json({
      resource,
      url: `${request.app.locals.apiBaseUrl}/api/${resource}/`,
      data,
    });
  });

  return router;
}