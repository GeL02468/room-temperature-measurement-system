import { getInsideTemperature } from '../services/getInsideTemperature'
import { getOutsideTemperature } from '../services/getOutsideTemperature'

// 室内温度取得ハンドラー
export const getInsideTemperatureHandler = async (req: number) => {
  const airPressure = await getInsideTemperature(req);
  return airPressure;
};

// 室外温度取得ハンドラー
export const getOutsideTemperatureHandler = async (req: number) => {
  const airPressure = await getOutsideTemperature(req);
  return airPressure;
};
