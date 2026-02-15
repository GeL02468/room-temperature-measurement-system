// 室内湿度取得API
import { prisma } from '../lib/prisma'

export const getInsideHumidity = async (req: number) => {
  const measurementArray = await prisma.inside_measure.findMany({
    where: { 
        inside_measure_date: {
          gte: new Date(Date.now() - req)
        }
    },
  });
  let resultArray: number[] = []; // 該当データ抽出用変数
  for (const measure of measurementArray) {
    resultArray.push(measure.inside_humidity);
  };
  return resultArray;
}