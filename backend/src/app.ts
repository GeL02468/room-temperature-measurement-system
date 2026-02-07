import { Hono } from 'hono'
import insideRouter from './routes/route'

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

app.route('/measurement', insideRouter);

export { app }