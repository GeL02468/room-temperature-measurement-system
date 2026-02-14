import { Hono } from 'hono';
import * as insideController from '../controllers/insideController';

const insideRouter = new Hono();

// 室内環境測定値登録パス
insideRouter.post('/post', async (c: any) => {
    const body = await c.req.json();
    const result =  insideController.postInsideMeasurementResultHandler(body);
    return c.json(result);
});

export default insideRouter;