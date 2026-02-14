// 室内温度取得API
import { prisma } from '../lib/prisma'

export const getInsideTemperature = async () => {
  const measurementArray = await prisma.inside_measure.findMany();
  let resultArray: number[] = [];
  for (const measure of measurementArray) {
    resultArray.push(measure.inside_temperature);
  };
  return resultArray;
}