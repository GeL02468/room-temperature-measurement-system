import { Hono } from 'hono';
import * as humidityController from '../controllers/humidityController';
import * as span from '../lib/span'

const humidityRouter = new Hono();

// 室内湿度取得パス
humidityRouter.get('/get/per-hour', async (c: any) => {
    const result = await humidityController.getInsideHumidityHandler(span.default.hour);
    return c.json(result);
});
humidityRouter.get('/get/per-day', async (c: any) => {
    const result = await humidityController.getInsideHumidityHandler(span.default.day);
    return c.json(result);
});
humidityRouter.get('/get/per-week', async (c: any) => {
    const result = await humidityController.getInsideHumidityHandler(span.default.week);
    return c.json(result);
});
humidityRouter.get('/get/per-month', async (c: any) => {
    const result = await humidityController.getInsideHumidityHandler(span.default.month);
    return c.json(result);
});

// 室外湿度取得パス
humidityRouter.get('/get/per-hour/outside', async (c: any) => {
    const result = await humidityController.getBothHumidityHandler(span.default.hour);
    return c.json(result);
});
humidityRouter.get('/get/per-day/outside', async (c: any) => {
    const result = await humidityController.getBothHumidityHandler(span.default.day);
    return c.json(result);
});
humidityRouter.get('/get/per-week/outside', async (c: any) => {
    const result = await humidityController.getBothHumidityHandler(span.default.week);
    return c.json(result);
});
humidityRouter.get('/get/per-month/outside', async (c: any) => {
    const result = await humidityController.getBothHumidityHandler(span.default.month);
    return c.json(result);
});

export default humidityRouter;