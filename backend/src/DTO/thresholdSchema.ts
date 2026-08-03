// 室内環境測定閾値登録DTO
export type thresholdValue = {
    id: number
    maxTemperature: number, 
    minTemperature: number, 
    maxHumidity: number,
    minHumidity: number, 
    maxAirPressure: number, 
    minAirPressure: number,
};
