import { recieveWeatherInfo } from "../services/postOutsideMeasurementResult";

// 室外環境測定値登録ハンドラー
export const postOutsideMeasurementResultHandler = async () => {
    // 現在の天気情報を取得
    const result = await recieveWeatherInfo();
    console.log(result);
    return result;
};