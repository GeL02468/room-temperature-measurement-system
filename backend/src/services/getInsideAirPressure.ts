// 室内気圧取得API
import { prisma } from '../lib/prisma'

export const getInsideAirPressure = async (req: number) => {
  // 引数で指定した直近の時間以降のデータを取得
  const measurementArray = await prisma.inside_measure.findMany({
    where: { 
        inside_measure_date: {
          gte: new Date(Date.now() - req)
        }
    },
  })
  // 気圧取得用変数
  let resultAirPressureArray: number[] = [];
  for (const measure of measurementArray) {
    resultAirPressureArray.push(measure.inside_air_pressure);
  };
  // 測定時刻取得用変数
  let resultDateArray: Date[] = [];
  for (const measure of measurementArray) {
    resultDateArray.push(measure.inside_measure_date);
  };
  // 戻り値用のオブジェクト定義（オブジェクトの中身：温度、測定時刻）
  const resultObject: object = {resultAirPressureArray, resultDateArray};
  return resultObject;
}