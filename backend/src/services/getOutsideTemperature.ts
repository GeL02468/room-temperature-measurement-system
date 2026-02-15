// 室外温度取得API
import { prisma } from '../lib/prisma'

export const getOutsideTemperature = async (req: number) => {
  const measurementArray = await prisma.outside_measure.findMany({
    where: { 
        outside_measure_date: {
          gte: new Date(Date.now() - req)
        }
    },
  });
  let resultArray: number[] = [];
  for (const measure of measurementArray) {
    resultArray.push(measure.outside_temperature);
  };
  return resultArray;
};