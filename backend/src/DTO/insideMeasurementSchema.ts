// 室内環境測定値登録DTO
export type insideMeasurementResult = {
  insideTemperature: number;
  insideHumidy: number;
  insideAirPressure: number;
  insideMeasureDate: Date;
  insideMeasurePlace: string;
};
