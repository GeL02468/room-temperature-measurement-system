// 通知全件削除API
import { prisma } from '../lib/prisma'

export const deleteNotification = async () => {return await prisma.notification.deleteMany()};