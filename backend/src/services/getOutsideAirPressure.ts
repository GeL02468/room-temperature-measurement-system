// 室外気圧取得API
import { prisma } from '../lib/prisma'

export const getOutsideAirPressure = async () => {
  const measurementArray = await prisma.outside_measure.findMany();
  let resultArray: number[] = [];
  for (const measure of measurementArray) {
    resultArray.push(measure.outside_air_pressure);
  };
  return resultArray;
};