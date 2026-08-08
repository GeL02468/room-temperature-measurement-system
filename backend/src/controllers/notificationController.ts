// 閾値APIコントローラー
import { getNotification } from '../services/getNotification'

// 閾値取得ハンドラー
export const getNotificationController = async () => {
  return await getNotification();
};
