// 室内環境測定閾値登録DTO
export type thresholdValue = {
    deviceId: string
    maxTemperature: number, 
    minTemperature: number, 
    maxHumidity: number,
    minHumidity: number, 
    maxAirPressure: number, 
    minAirPressure: number,
};
