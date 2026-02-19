import { Hono } from 'hono';
import * as temperatureController from '../controllers/temperatureController'
import * as span from '../lib/span'

const temperatureRouter = new Hono();

// 温度取得パス
temperatureRouter.get('/get/per-hour', async (c: any) => {
    const result = await temperatureController.getTemperatureHandler(span.default.hour);
    return c.json(result);
});
temperatureRouter.get('/get/per-day', async (c: any) => {
    const result = await temperatureController.getTemperatureHandler(span.default.day);
    return c.json(result);
});
temperatureRouter.get('/get/per-week', async (c: any) => {
    const result = await temperatureController.getTemperatureHandler(span.default.week);
    return c.json(result);
});
temperatureRouter.get('/get/per-month', async (c: any) => {
    const result = await temperatureController.getTemperatureHandler(span.default.month);
    return c.json(result);
});

export default temperatureRouter;