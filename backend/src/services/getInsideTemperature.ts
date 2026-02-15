// 室内温度取得API
import { prisma } from '../lib/prisma'

export const getInsideTemperature = async (req: number) => {
  const measurementArray = await prisma.inside_measure.findMany({
    where: { 
        inside_measure_date: {
          gte: new Date(Date.now() - req)
        }
    },
  });
  let resultArray: number[] = [];
  for (const measure of measurementArray) {
    resultArray.push(measure.inside_temperature);
  };
  return resultArray;
}