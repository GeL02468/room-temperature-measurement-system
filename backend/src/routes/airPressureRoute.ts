import { Hono } from 'hono';
import * as airPressureController from '../controllers/airPressureController';
import * as span from '../lib/span'

const airPressureRouter = new Hono();

// 気圧取得パス
airPressureRouter.get('/get/per-hour', async (c: any) => {
    const result = await airPressureController.getAirPressureHandler(span.default.hour);
    return c.json(result);
});
airPressureRouter.get('/get/per-day', async (c: any) => {
    const result = await airPressureController.getAirPressureHandler(span.default.day);
    return c.json(result);
});
airPressureRouter.get('/get/per-week', async (c: any) => {
    const result = await airPressureController.getAirPressureHandler(span.default.week);
    return c.json(result);
});
airPressureRouter.get('/get/per-month', async (c: any) => {
    const result = await airPressureController.getAirPressureHandler(span.default.month);
    return c.json(result);
});

export default airPressureRouter;