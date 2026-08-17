import { Hono } from 'hono';
import * as getNotificationController from '../controllers/notificationController';

const notificationRouter = new Hono();

// 通知全件取得パス
notificationRouter.get(async(c: any) => {
  const result = await getNotificationController.getNotificationController();
  return c.json(result);
});

// 通知全件削除パス
notificationRouter.delete(async(c: any) => {
  const result = await getNotificationController.deleteNotificationController();
  return c.json(result);
});

export {
  notificationRouter
} ;