import { Hono } from 'hono';

// controllerから処理関数を呼び出す
import * as insideController from '../controllers/insideController';

const insideRouter = new Hono();

//メソッドおよびPassに応じてエンドポイントを管理
insideRouter.get('/get/air_pressure', insideController.getInsideAirPressureHandler);
insideRouter.post('/post/inside_measurement_result', insideController.postInsideMeasurementResultHandler)

export default insideRouter;