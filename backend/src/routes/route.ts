import { Hono } from 'hono';
import * as insideController from '../controllers/insideController';
import * as outsideController from '../controllers/outsideController';

const insideRouter = new Hono();
const outsideRouter = new Hono();

// 室内気圧取得パス
insideRouter.get('/get/air_pressure', async (c: any) => {
    const result = await insideController.getInsideAirPressureHandler();
    return c.json(result);
});

// 室内温度取得パス
insideRouter.get('/get/temperature', async (c: any) => {
    const result = await insideController.getInsideTemperatureHandler();
    return c.json(result);
});

// 室内湿度取得パス
insideRouter.get('/get/humidity', async (c: any) => {
    const result = await insideController.getInsideHumidityHandler();
    return c.json(result);
});

// 室内環境測定値登録パス
insideRouter.post('/post/inside_measurement_result', async (c: any) => {
    const body = await c.req.json();
    console.log("登録した室内環境情報: ",body);
    const result =  insideController.postInsideMeasurementResultHandler(body);
    return c.json(result);
});

// 室外環境測定値登録パス
outsideRouter.get('/post/outside_measurement_result', async (c: any) => {
    const result = await outsideController.postOutsideMeasurementResultHandler();
    return c.json(result);
});

export default  {
    insideRouter,
    outsideRouter
}