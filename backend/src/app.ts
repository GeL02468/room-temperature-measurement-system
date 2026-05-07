import { Hono } from 'hono'
import axios from 'axios';
import cron from "node-cron";
import temperatureRouter from './routes/temperatureRoute'
import humidityRouter from './routes/humidityRoute'
import airPressureRouter from './routes/airPressureRoute'
import thresholdRouter from './routes/thresholdRoute'
import insideRouter from './routes/insideRoute'
import outsideRouter from './routes/outsideRoute'

const app = new Hono();

// パスルーティング
app.get('/', (c) => {
  return c.text('Hello Hono!');
});

app.route('/measurement/temperature', temperatureRouter);
app.route('/measurement/humidity', humidityRouter);
app.route('/measurement/air-pressure', airPressureRouter);
app.route('/measurement/threshold', thresholdRouter);
app.route('/measurement/inside', insideRouter);
app.route('/measurement/outside', outsideRouter);

// 毎時0分に室外環境情報を登録する
cron.schedule("0 * * * *", async() => {
  const response = await axios.post('http://localhost:3000/measurement/outside/post');
  console.log(response);
});

export { app }