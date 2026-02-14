import { Hono } from 'hono'
import thresholdRouter from './routes/thresholdRoute'
import temperatureRouter from './routes/temperatureRoute'
import humidityRouter from './routes/humidityRoute'
import airPressureRouter from './routes/airPressureRoute'
import insideRouter from './routes/insideRoute'
import outsideRouter from './routes/outsideRoute'

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

app.route('/measurement/temperature', temperatureRouter);
app.route('/measurement/humidity', humidityRouter);
app.route('/measurement/air-pressure', airPressureRouter);
app.route('/measurement/threshold', thresholdRouter);
app.route('/measurement/inside', insideRouter);
app.route('/measurement/outside', outsideRouter);

export { app }