import express from 'express';
import { apiBaseUrl, port } from './config/api';
import './config/database';
import apiRouter from './routes';

const app = express();

app.use(express.json());
app.use('/api', apiRouter);

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', url: apiBaseUrl });
});

app.listen(port, () => {
  console.log(`OctoFit API listening at ${apiBaseUrl}`);
});