// 室内湿度取得API
import { prisma } from '../lib/prisma'

export const getInsideHumidity = async () => {
  const measurementArray = await prisma.inside_measure.findMany();
  let resultArray: number[] = []; // 該当データ抽出用変数
  for (const measure of measurementArray) {
    resultArray.push(measure.inside_humidity);
  };
  return resultArray;
}