import { Hono } from 'hono';
import * as humidityController from '../controllers/humidityController';

const humidityRouter = new Hono();

// 室内湿度取得パス
humidityRouter.get('/get', async (c: any) => {
    const result = await humidityController.getInsideHumidityHandler();
    return c.json(result);
});

// 室外湿度取得パス
humidityRouter.get('/get/outside', async (c: any) => {
    const result = await humidityController.getOutsideHumidityHandler();
    return c.json(result);
});

export default humidityRouter;