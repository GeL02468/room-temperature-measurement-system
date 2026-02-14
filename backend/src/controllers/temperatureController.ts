import { getInsideTemperature } from '../services/getInsideTemperature'
import { getOutsideTemperature } from '../services/getOutsideTemperature'

// 室内温度取得ハンドラー
export const getInsideTemperatureHandler = async () => {
  const airPressure = await getInsideTemperature();
  return airPressure;
};

// 室外温度取得ハンドラー
export const getOutsideTemperatureHandler = async () => {
  const airPressure = await getOutsideTemperature();
  return airPressure;
};
