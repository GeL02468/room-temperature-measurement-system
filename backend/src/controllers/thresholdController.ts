// 閾値APIコントローラー
import { getThreshold } from '../services/getThreshold'
import { putThreshold } from '../services/putThreshold'
import type { thresholdValue } from '../DTO/thresholdSchema'

// 閾値取得ハンドラー
export const getThresholdValue = async () => {
  return await getThreshold();
};

// 閾値登録ハンドラー
export const putThresholdValue = async (req: thresholdValue) => {
  return await putThreshold(req);
};