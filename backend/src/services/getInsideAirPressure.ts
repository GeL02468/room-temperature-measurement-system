// 室内気圧取得API
import { prisma } from '../lib/prisma'

export const getInsideAirPressure = async (req: number) => {
  // 時間単位であれば、findManyで一日以内のすべての履歴を取得する
  // 日単位であれば、以下の処理が必要
  // TODO: ただし、ページを開くごとに処理を実行するのは処理が重くなるため、DBに日専用の表示データを履歴として別に格納しておく
  // よって以下の処理は、計測時間を基に自動的に行われる処理とする
  // 具体的には、履歴に登録されるタイミングで日専用のDBにデータを格納するための処理を行う
  // 時間履歴テーブルに登録されるタイミングと同時に、非同期処理で実行する
  // 1. 最高気温の求め方
  // findFirstで日専用DBから最新の履歴情報（最高温度）を取得して、リクエストボディと値を比較する
  // 比較して温度が高いほうの値をDBに格納する
  // 2. 最低気温の求め方
  // 上記と同様の処理を最低温度として実行する（温度が低いほうをDBに格納）
  // 3. 最高・最低湿度、気圧の求め方
  // 上記と同様の処理を、各対象データで実行する

  // 引数で指定した直近の時間以降のデータを取得
  const measurementArray = await prisma.insideHistory.findMany({
    where: { 
        measurement_time: {
          gte: new Date(Date.now() - req)
        }
    },
  })
  // 気圧取得用変数
  let resultAirPressureArray: number[] = [];
  for (const measure of measurementArray) {
    resultAirPressureArray.push(measure.air_pressure);
  };
  // 測定時刻取得用変数
  let resultDateArray: Date[] = [];
  for (const measure of measurementArray) {
    resultDateArray.push(measure.measurement_time);
  };
  // 戻り値用のオブジェクト定義（オブジェクトの中身：温度、測定時刻）
  const resultObject: object = {resultAirPressureArray, resultDateArray};
  return resultObject;
}