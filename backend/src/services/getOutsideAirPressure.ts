// 室外気圧取得API
import { prisma } from '../lib/prisma'

export const getOutsideAirPressure = async (req: number) => {
  // 引数で指定した直近の時間以降のデータを取得
  const measurementArray = await prisma.outside_measure.findMany({
    where: { 
        outside_measure_date: {
          gte: new Date(Date.now() - req)
        }
    },
  });
  // 気圧取得用変数
  let resultAirPressureArray: number[] = [];
  for (const measure of measurementArray) {
    resultAirPressureArray.push(measure.outside_air_pressure);
  };
  // 測定時刻取得用変数
  let resultDateArray: Date[] = [];
  for (const measure of measurementArray) {
    resultDateArray.push(measure.outside_measure_date);
  };
  // 戻り値用のオブジェクト定義（オブジェクトの中身：温度、測定時刻）
  let resultObject: object = {resultAirPressureArray, resultDateArray};
  return resultObject;
};