// 室内気圧取得API
import { prisma } from '../lib/prisma'

export const getInsideAirPressure = async () => {
  const airPresure = await prisma.inside_measure.findMany({
    where: { 
        inside_measure_date: {
            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // 1週間以内のデータを取得
        }
    },
  })
  let airPresssureArray: number[] = [];
  for (const measure of airPresure) {
    airPresssureArray.push(measure.inside_air_pressure)
  };
  console.log("1週間分の気圧情報",airPresssureArray);
  return airPresssureArray;
}