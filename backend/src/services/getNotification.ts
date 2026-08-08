// 通知取得API
import { prisma } from '../lib/prisma'

export const getNotification = async () => {return await prisma.notification.findMany()};