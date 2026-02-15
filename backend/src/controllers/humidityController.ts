import { getInsideHumidity } from '../services/getInsideHumidity'
import { getOutsideHumidity } from '../services/getOutsideHumidity'

// 室内湿度取得ハンドラー
export const getInsideHumidityHandler = async (req: number) => {
  const airPressure = await getInsideHumidity(req);
  return airPressure;
};

// 室外湿度取得ハンドラー
export const getOutsideHumidityHandler = async (req: number) => {
  const airPressure = await getOutsideHumidity(req);
  return airPressure;
};