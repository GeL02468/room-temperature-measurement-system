// 室内APIコントローラー
import { getInsideAirPressure } from '../services/getInsideAirPressure'
import { postInsideMeasurementResult } from '../services/postInsideMeasurementResult'

// 室内環境情報登録の実行
const requestBody = {
  inside_temperature: 22.5,
  inside_humidity: 45.0,
  inside_measure_palce: "リビングルーム",
  inside_air_pressure: 1013.25,
}

// 室内気圧取得のハンドラー
export const getInsideAirPressureHandler = async (c: any) => {
  const airPressure = await getInsideAirPressure()
  return c.json({ airPressure })
}

// 室内環境情報登録のハンドラー
export const postInsideMeasurementResultHandler = async (c: any) => {
  const airPressure = await getInsideAirPressure()
  const result = await postInsideMeasurementResult(requestBody)
  return c.json({ airPressure, result })
}