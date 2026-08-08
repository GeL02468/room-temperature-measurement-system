import { Hono } from 'hono';
import * as getNotificationController from '../controllers/notificationController';

const notificationRouter = new Hono();

// 閾値取得パス
notificationRouter.get(async(c: any) => {
    const result = await getNotificationController.getNotificationController();
    return c.json(result);
});

export default notificationRouter;