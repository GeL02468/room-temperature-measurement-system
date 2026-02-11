// 室外APIコントローラー
import { recieveWeatherInfo } from "../services/getOutsideMeasurementResult";
import { postOutsideMeasurementResult } from "../services/postOutsideMeasurementResult";

// 室外環境測定値登録ハンドラー
export const postOutsideMeasurementResultHandler = async () => {
    // 現在の天気情報を取得
    const getWeatherResult = await recieveWeatherInfo();
    const json = JSON.parse(getWeatherResult);
    // DBへ登録
    const result = await postOutsideMeasurementResult(json)
    return result;
};