import { Hono } from 'hono';
import { getInsideTemperatureHandler, getOutsideTemperatureHandler } from '../controllers/temperatureController'

const temperatureRouter = new Hono();

// 室内温度取得パス
temperatureRouter.get('/get', async (c: any) => {
    const result = await getInsideTemperatureHandler();
    return c.json(result);
});

// 室外温度取得パス
temperatureRouter.get('/get/outside', async (c: any) => {
    const result = await getOutsideTemperatureHandler();
    return c.json(result);
});

export default temperatureRouter;