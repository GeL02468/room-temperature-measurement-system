// 閾値APIコントローラー
import { getThreshold } from '../services/getThreshold'
import { putThreshold } from '../services/putThreshold'
import type { thresholdValue } from '../DTO/thresholdSchema'

// 閾値取得ハンドラー
export const getThresholdValue = async (deviceId: string) => {
  return await getThreshold(deviceId);
};

// 閾値登録ハンドラー
export const putThresholdValue = async (deviceId: string, req: thresholdValue) => {
  return await putThreshold(deviceId, req);
};