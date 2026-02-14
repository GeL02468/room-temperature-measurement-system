import { Hono } from 'hono';
import * as airPressureController from '../controllers/airPressureController';

const airPressureRouter = new Hono();

// 室内気圧取得パス
airPressureRouter.get('/get', async (c: any) => {
    const result = await airPressureController.getInsideAirPressureHandler();
    return c.json(result);
});

// 室外気圧取得パス
airPressureRouter.get('/get/outside', async (c: any) => {
    const result = await airPressureController.getOutsideAirPressureHandler();
    return c.json(result);
});

export default airPressureRouter;