// 閾値取得API
import { prisma } from '../lib/prisma'

export const getThreshold = async () => {
  const thresholdValue = await prisma.threshold.findUnique({
    where: { id: 1 }
  })
  return thresholdValue;
};