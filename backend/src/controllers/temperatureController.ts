import { getInsideTemperature } from '../services/getInsideTemperature'
import { getOutsideTemperature } from '../services/getOutsideTemperature'

// 温度取得ハンドラー
export const getTemperatureHandler = async (req: number) => {
  const insideTemperature = await getInsideTemperature(req);
  const outsideTemperature = await getOutsideTemperature(req);
  const result: object = {insideTemperature, outsideTemperature};
  return result;
};
