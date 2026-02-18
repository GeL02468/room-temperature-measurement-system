// 室外温度取得API
import { prisma } from '../lib/prisma'

export const getOutsideTemperature = async (req: number) => {
  // 引数で指定した直近の時間以降のデータを取得
  const measurementArray = await prisma.outside_measure.findMany({
    where: { 
        outside_measure_date: {
          gte: new Date(Date.now() - req)
        }
    },
  });
  // 温度取得用変数
  let resultTemperatureArray: number[] = [];
  for (const measure of measurementArray) {
    resultTemperatureArray.push(measure.outside_temperature);
  };
  // 測定時刻取得用変数
  let resultDateArray: Date[] = [];
  for (const measure of measurementArray) {
    resultDateArray.push(measure.outside_measure_date);
  };
  // 戻り値用のオブジェクト定義（オブジェクトの中身：温度、測定時刻）
  const resultObject: object = {resultTemperatureArray, resultDateArray};
  return resultObject;
};