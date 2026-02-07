// 室内APIコントローラー
import { getInsideAirPressure } from '../services/getInsideAirPressure'
import { getInsideTemperature } from '../services/getInsideTemperature'
import { getInsideHumidity } from '../services/getInsideHumidity'
import { postInsideMeasurementResult } from '../services/postInsideMeasurementResult'
import type { insideMeasurementResult } from '../DTO/insideMeasurementSchema'

// 室内気圧取得ハンドラー
export const getInsideAirPressureHandler = async () => {
  const airPressure = await getInsideAirPressure();
  return airPressure
};

// 室内温度取得ハンドラー
export const getInsideTemperatureHandler = async () => {
  const airPressure = await getInsideTemperature();
  return airPressure
};

// 室内湿度取得ハンドラー
export const getInsideHumidityHandler = async () => {
  const airPressure = await getInsideHumidity();
  return airPressure
};

// 室内環境測定値登録ハンドラー
export const postInsideMeasurementResultHandler = async (req: insideMeasurementResult) => {
  const result = await postInsideMeasurementResult(req);
  return result
};