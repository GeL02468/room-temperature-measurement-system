import { Hono } from 'hono';

// controllerから処理関数を呼び出す
import * as insideController from '../controllers/insideController';

const insideRouter = new Hono();

// メソッドおよびPassに応じてエンドポイントを管理
insideRouter.get('/get/air_pressure', async (c: any) => {
    const result = await insideController.getInsideAirPressureHandler()
    return c.json(result)
})

insideRouter.post('/post/inside_measurement_result', async (c: any) => {
    const body = await c.req.json()
    console.log(body)
    const result =  insideController.postInsideMeasurementResultHandler(body)
    return c.json(result)
})


export default insideRouter;