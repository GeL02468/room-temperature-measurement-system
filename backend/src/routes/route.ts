import { Hono } from 'hono';
import * as insideController from '../controllers/insideController';
import * as outsideController from '../controllers/outsideController';
import * as thresholdController from '../controllers/thresholdController';

const insideRouter = new Hono();
const outsideRouter = new Hono();
const thresholdRouter = new Hono();

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
    const result =  insideController.postInsideMeasurementResultHandler(body);
    return c.json(result);
});

// 室外環境測定値登録パス
outsideRouter.post('/post/outside_measurement_result', async (c: any) => {
    const result = await outsideController.postOutsideMeasurementResultHandler();
    return c.json(result);
});

// 閾値取得パス
thresholdRouter.get('/get/threshold', async(c: any) => {
    const result = await thresholdController.getThresholdValue();
    return c.json(result);
});

// 閾値登録パス
thresholdRouter.put('/put/threshold', async(c: any) => {
    const body = await c.req.json();
    const result = await thresholdController.putThresholdValue(body);
    return c.json(result);
});

export default  {
    insideRouter,
    outsideRouter,
    thresholdRouter
}