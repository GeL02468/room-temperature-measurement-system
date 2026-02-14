import { getInsideAirPressure } from '../services/getInsideAirPressure'
import { getOutsideAirPressure } from '../services/getOutsideAirPressure'

// 室内気圧取得ハンドラー
export const getInsideAirPressureHandler = async () => {
  const airPressure = await getInsideAirPressure();
  return airPressure;
};

// 室外気圧取得ハンドラー
export const getOutsideAirPressureHandler = async () => {
  const airPressure = await getOutsideAirPressure();
  return airPressure;
};