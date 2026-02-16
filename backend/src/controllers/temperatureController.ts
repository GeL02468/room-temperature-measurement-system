import { getInsideTemperature } from '../services/getInsideTemperature'
import { getOutsideTemperature } from '../services/getOutsideTemperature'

// 室内温度取得ハンドラー
export const getInsideTemperatureHandler = async (req: number) => {
  const insideTemperature = await getInsideTemperature(req);
  return insideTemperature;
};

// 室内・室外温度取得ハンドラー
export const getBothTemperatureHandler = async (req: number) => {
  const insideTemperature = await getInsideTemperature(req);
  const outsideTemperature = await getOutsideTemperature(req);
  const result: object = {insideTemperature, outsideTemperature};
  return result;
};
