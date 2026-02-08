import { Hono } from 'hono'
import router from './routes/route'

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

app.route('/measurement/inside', router.insideRouter);
app.route('/measurement/outside', router.outsideRouter);

export { app }