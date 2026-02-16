import { getInsideHumidity } from '../services/getInsideHumidity'
import { getOutsideHumidity } from '../services/getOutsideHumidity'

// 室内湿度取得ハンドラー
export const getInsideHumidityHandler = async (req: number) => {
  const insideHumidity = await getInsideHumidity(req);
  return insideHumidity;
};

// 室内・室外湿度取得ハンドラー
export const getBothHumidityHandler = async (req: number) => {
  const insideHumidity = await getInsideHumidity(req);
  const outsideHumidity = await getOutsideHumidity(req);
  const result: object = {insideHumidity, outsideHumidity};
  return result;
};