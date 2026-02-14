// 室外温度取得API
import { prisma } from '../lib/prisma'

export const getOutsideTemperature = async () => {
  const measurementArray = await prisma.outside_measure.findMany();
  let resultArray: number[] = [];
  for (const measure of measurementArray) {
    resultArray.push(measure.outside_temperature);
  };
  return resultArray;
};