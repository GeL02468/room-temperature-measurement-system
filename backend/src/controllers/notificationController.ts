// 通知APIコントローラー
import { getNotification } from '../services/getNotification'
import { deleteNotification } from '../services/deleteNotification'

// 通知全件取得ハンドラー
export const getNotificationController = async () => {
  return await getNotification();
};

// 通知全件削除ハンドラー
export const deleteNotificationController = async () => {
  return await deleteNotification();
};
