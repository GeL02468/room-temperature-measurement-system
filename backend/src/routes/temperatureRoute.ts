import { Hono } from 'hono';
import { getInsideTemperatureHandler, getOutsideTemperatureHandler } from '../controllers/temperatureController'
import * as span from '../lib/span'

const temperatureRouter = new Hono();

// 室内温度取得パス
// 1hour, 1day, 1week, 1month ごとにパスを分け、Service層にて日時計算の部分で、指定したそれぞれの引数を減算する
temperatureRouter.get('/get/per-hour', async (c: any) => {
    const result = await getInsideTemperatureHandler(span.default.hour);
    return c.json(result);
});
temperatureRouter.get('/get/per-day', async (c: any) => {
    const result = await getInsideTemperatureHandler(span.default.day);
    return c.json(result);
});
temperatureRouter.get('/get/per-week', async (c: any) => {
    const result = await getInsideTemperatureHandler(span.default.week);
    return c.json(result);
});
temperatureRouter.get('/get/per-month', async (c: any) => {
    const result = await getInsideTemperatureHandler(span.default.month);
    return c.json(result);
});

// 室外温度取得パス
temperatureRouter.get('/get/per-hour/outside', async (c: any) => {
    const result = await getOutsideTemperatureHandler(span.default.hour);
    return c.json(result);
});
temperatureRouter.get('/get/per-day/outside', async (c: any) => {
    const result = await getOutsideTemperatureHandler(span.default.day);
    return c.json(result);
});
temperatureRouter.get('/get/per-week/outside', async (c: any) => {
    const result = await getOutsideTemperatureHandler(span.default.week);
    return c.json(result);
});
temperatureRouter.get('/get/per-month/outside', async (c: any) => {
    const result = await getOutsideTemperatureHandler(span.default.month);
    return c.json(result);
});

export default temperatureRouter;