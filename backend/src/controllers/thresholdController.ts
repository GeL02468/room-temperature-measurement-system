// 閾値APIコントローラー
import { getThreshold } from '../services/getThreshold'
import { putThreshold } from '../services/putThreshold'
import type { thresholdValue } from '../DTO/thresholdSchema'

// 閾値取得ハンドラー
export const getThresholdValue = async () => {
  const result = await getThreshold();
  return result;
};

// 閾値登録ハンドラー
export const putThresholdValue = async (req: thresholdValue) => {
  const result = await putThreshold(req);
  return result
};