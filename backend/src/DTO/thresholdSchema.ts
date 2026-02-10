// 室内環境測定閾値登録DTO
export type thresholdValue = {
    id: number
    outsideMaxTemperature: number, 
    outsideMinTemperature: number, 
    outsideMaxHumidity: number,
    outsideMinHumidity: number, 
    outsideMaxAirPressure: number, 
    outsideMinAirPressure: number,
    outsideMeasureDate?: Date,
};
