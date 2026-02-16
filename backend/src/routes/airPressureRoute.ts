import { Hono } from 'hono';
import * as airPressureController from '../controllers/airPressureController';
import * as span from '../lib/span'

const airPressureRouter = new Hono();

// 室内気圧取得パス
airPressureRouter.get('/get/per-hour', async (c: any) => {
    const result = await airPressureController.getInsideAirPressureHandler(span.default.hour);
    return c.json(result);
});
airPressureRouter.get('/get/per-day', async (c: any) => {
    const result = await airPressureController.getInsideAirPressureHandler(span.default.day);
    return c.json(result);
});
airPressureRouter.get('/get/per-week', async (c: any) => {
    const result = await airPressureController.getInsideAirPressureHandler(span.default.week);
    return c.json(result);
});
airPressureRouter.get('/get/per-month', async (c: any) => {
    const result = await airPressureController.getInsideAirPressureHandler(span.default.month);
    return c.json(result);
});

// 室外気圧取得パス
airPressureRouter.get('/get/per-hour/outside', async (c: any) => {
    const result = await airPressureController.getBothAirPressureHandler(span.default.hour);
    return c.json(result);
});
airPressureRouter.get('/get/per-day/outside', async (c: any) => {
    const result = await airPressureController.getBothAirPressureHandler(span.default.day);
    return c.json(result);
});
airPressureRouter.get('/get/per-week/outside', async (c: any) => {
    const result = await airPressureController.getBothAirPressureHandler(span.default.week);
    return c.json(result);
});
airPressureRouter.get('/get/per-month/outside', async (c: any) => {
    const result = await airPressureController.getBothAirPressureHandler(span.default.month);
    return c.json(result);
});

export default airPressureRouter;