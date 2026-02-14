import { getInsideHumidity } from '../services/getInsideHumidity'
import { getOutsideHumidity } from '../services/getOutsideHumidity'

// 室内湿度取得ハンドラー
export const getInsideHumidityHandler = async () => {
  const airPressure = await getInsideHumidity();
  return airPressure;
};

// 室外湿度取得ハンドラー
export const getOutsideHumidityHandler = async () => {
  const airPressure = await getOutsideHumidity();
  return airPressure;
};