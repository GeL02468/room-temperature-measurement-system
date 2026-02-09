// Todo: OpenWeatherAPIから1hごとに天気情報を取得して、DBに登録・保存する
// 以下、DBへの登録APIとする
import fetch from "node-fetch";

export async function recieveWeatherInfo(): Promise<string> {
    const appId = "a193a6535e7cf6cb80d503a9c216d5d4";
    const url = "http://api.openweathermap.org/data/2.5/weather?lang=ja&lat=34.7976&lon=135.563171&units=metric&appid="
    const response = await fetch(url+appId);
    return response.text();
};