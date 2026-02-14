import { Hono } from 'hono';
import * as outsideController from '../controllers/outsideController';

const outsideRouter = new Hono();

// 室外環境測定値登録パス
outsideRouter.post('/post', async (c: any) => {
    const result = await outsideController.postOutsideMeasurementResultHandler();
    return c.json(result);
});

export default outsideRouter;
