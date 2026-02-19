import { Hono } from 'hono';
import * as humidityController from '../controllers/humidityController';
import * as span from '../lib/span'

const humidityRouter = new Hono();

// 湿度取得パス
humidityRouter.get('/get/per-hour', async (c: any) => {
    const result = await humidityController.getHumidityHandler(span.default.hour);
    return c.json(result);
});
humidityRouter.get('/get/per-day', async (c: any) => {
    const result = await humidityController.getHumidityHandler(span.default.day);
    return c.json(result);
});
humidityRouter.get('/get/per-week', async (c: any) => {
    const result = await humidityController.getHumidityHandler(span.default.week);
    return c.json(result);
});
humidityRouter.get('/get/per-month', async (c: any) => {
    const result = await humidityController.getHumidityHandler(span.default.month);
    return c.json(result);
});

export default humidityRouter;