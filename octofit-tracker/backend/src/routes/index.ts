import { Router } from 'express';
import { Activity, Leaderboard, Team, User, Workout } from '../models';
import { createResourceRouter } from './resourceRoutes';

const apiRouter = Router();

apiRouter.use('/users', createResourceRouter('users', User));
apiRouter.use('/teams', createResourceRouter('teams', Team));
apiRouter.use('/activities', createResourceRouter('activities', Activity));
apiRouter.use('/leaderboard', createResourceRouter('leaderboard', Leaderboard));
apiRouter.use('/workouts', createResourceRouter('workouts', Workout));

export default apiRouter;