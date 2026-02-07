// 室内気圧取得API
import { prisma } from '../lib/prisma'

export const getInsideAirPressure = async () => {
  const measurementArray = await prisma.inside_measure.findMany({
    where: { 
        inside_measure_date: {
            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // 1週間以内のデータを取得
        }
    },
  })
  let resultArray: number[] = [];
  for (const measure of measurementArray) {
    resultArray.push(measure.inside_air_pressure);
  };
  return resultArray;
}