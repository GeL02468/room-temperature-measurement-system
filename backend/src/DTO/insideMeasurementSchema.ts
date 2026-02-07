// 室内環境情報登録DTO
export type insideMeasurementResult = {
  insideTemperature: number;
  insideHumidy: number;
  insideAirPressure: number;
  insideMeasureDate: Date;
  insideMeasurePlace: string;
};
