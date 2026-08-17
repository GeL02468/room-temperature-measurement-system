import { Hono } from 'hono';
import * as getNotificationController from '../controllers/notificationController';
import * as thresholdController from '../controllers/thresholdController';

const notificationRouter = new Hono();
const thresholdRouter = new Hono();

// 通知全件取得
notificationRouter.get(async(c: any) => {
  const result = await getNotificationController.getNotificationController();
  return c.json(result);
});

// 通知全件削除
notificationRouter.delete(async(c: any) => {
  const result = await getNotificationController.deleteNotificationController();
  return c.json(result);
});

// 判定閾値取得
thresholdRouter.get('/:deviceId', async(c: any) => {
  const deviceId = c.req.param('deviceId');
  const result = await thresholdController.getThresholdValue(deviceId);
  return c.json(result);
});

// 判定閾値登録
thresholdRouter.put('/:deviceId', async(c: any) => {
  const deviceId = c.req.param('deviceId');
  const body = await c.req.json();
  const result = await thresholdController.putThresholdValue(deviceId, body);
  return c.json(result);
});


export {
  notificationRouter,
  thresholdRouter
} ;