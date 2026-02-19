import { getInsideAirPressure } from '../services/getInsideAirPressure'
import { getOutsideAirPressure } from '../services/getOutsideAirPressure'

// 気圧取得ハンドラー
export const getAirPressureHandler = async (req: number) => {
  const outsideAirPressure = await getOutsideAirPressure(req);
  const insideAirPressure = await getInsideAirPressure(req);
  const result: object = {outsideAirPressure, insideAirPressure};
  return result;
};