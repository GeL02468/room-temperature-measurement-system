// 閾値取得API
import { prisma } from '../lib/prisma'

export const getThreshold = async (deviceId: string) => {
  const thresholdValue = await prisma.threshold.findUnique({
    where: { device_id: deviceId }
  })
  return thresholdValue;
};