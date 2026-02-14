import { Hono } from 'hono';
import * as thresholdController from '../controllers/thresholdController';

const thresholdRouter = new Hono();

// 閾値取得パス
thresholdRouter.get('/get', async(c: any) => {
    const result = await thresholdController.getThresholdValue();
    return c.json(result);
});

// 閾値登録パス
thresholdRouter.put('/put', async(c: any) => {
    const body = await c.req.json();
    const result = await thresholdController.putThresholdValue(body);
    return c.json(result);
});

export default thresholdRouter;