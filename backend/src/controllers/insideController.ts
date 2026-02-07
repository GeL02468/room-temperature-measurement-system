// 室内APIコントローラー
import { getInsideAirPressure } from '../services/getInsideAirPressure'
import { postInsideMeasurementResult } from '../services/postInsideMeasurementResult'
import type { insideMeasurementResult } from '../DTO/insideMeasurementSchema'

// 室内気圧取得ハンドラー
export const getInsideAirPressureHandler = async () => {
  const airPressure = await getInsideAirPressure();
  return airPressure
};

// 室内環境測定値登録ハンドラー
export const postInsideMeasurementResultHandler = async (req: insideMeasurementResult) => {
  const result = await postInsideMeasurementResult(req);
  return result
};