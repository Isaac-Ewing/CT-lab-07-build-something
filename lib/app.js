import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import numController from './controllers/routes.js';

const app = express();

app.use(express.json());

app.use('/api/v1/num', numController);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
