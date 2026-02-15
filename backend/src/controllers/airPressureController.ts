import { getInsideAirPressure } from '../services/getInsideAirPressure'
import { getOutsideAirPressure } from '../services/getOutsideAirPressure'

// 室内気圧取得ハンドラー
export const getInsideAirPressureHandler = async (req: number) => {
  const airPressure = await getInsideAirPressure(req);
  return airPressure;
};

// 室外気圧取得ハンドラー
export const getOutsideAirPressureHandler = async (req: number) => {
  const airPressure = await getOutsideAirPressure(req);
  return airPressure;
};