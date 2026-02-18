// 室内APIコントローラー
import { postInsideMeasurementResult } from '../services/postInsideMeasurementResult'
import type { insideMeasurementResult } from '../DTO/insideMeasurementSchema'

// 室内環境測定値登録ハンドラー
export const postInsideMeasurementResultHandler = async (req: insideMeasurementResult) => {
  return await postInsideMeasurementResult(req);
};