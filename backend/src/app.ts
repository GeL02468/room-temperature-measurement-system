import { Hono } from 'hono'
import { cors } from "hono/cors"; // 追加
import axios from 'axios';
import cron from "node-cron";
import temperatureRouter from './routes/temperatureRoute'
import humidityRouter from './routes/humidityRoute'
import airPressureRouter from './routes/airPressureRoute'
import thresholdRouter from './routes/thresholdRoute'
import insideRouter from './routes/insideRoute'
import outsideRouter from './routes/outsideRoute'

const app = new Hono();

// CORSミドルウェアを適用
app.use(
  "/measurement/*",
  cors({
    origin: "http://localhost:5173", // Reactのオリジンを許可
  }),
);

app.route('/measurement/temperature', temperatureRouter);
app.route('/measurement/humidity', humidityRouter);
app.route('/measurement/air-pressure', airPressureRouter);
app.route('/measurement/threshold', thresholdRouter);
app.route('/measurement/inside', insideRouter);
app.route('/measurement/outside', outsideRouter);

// 毎時0分に室外環境情報を登録する
cron.schedule("0 * * * *", async() => {
  const outsideResponse = await axios.post('http://localhost:3000/measurement/outside/post');
  console.log(outsideResponse);
});

// --- cronでcurl相当のPOSTを送る（Mock用） ---
cron.schedule('0 * * * *', async () => {
  console.log('cron: sending test POST')

  await fetch('http://localhost:3000/measurement/inside/post', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      inside_temperature: 25,
      inside_humidity: 55,
      inside_air_pressure: 1013,
      inside_measure_date: new Date(),
      inside_measure_palce: "Mock"
    })
  })
})
// ---------------------------------

app.post('/measurement/inside/post', async (c) => {
  const body = await c.req.json()
  console.log('Received:', body)
  return c.json({ status: 'ok', received: body })
})

export { app }