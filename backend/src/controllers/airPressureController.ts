import { getInsideAirPressure } from '../services/getInsideAirPressure'
import { getOutsideAirPressure } from '../services/getOutsideAirPressure'

// 室内気圧取得ハンドラー
export const getInsideAirPressureHandler = async (req: number) => {
  return await getInsideAirPressure(req);
};

// 室内・室外気圧取得ハンドラー
export const getBothAirPressureHandler = async (req: number) => {
  const outsideAirPressure = await getOutsideAirPressure(req);
  const insideAirPressure = await getInsideAirPressure(req);
  const result: object = {outsideAirPressure, insideAirPressure};
  return result;
};