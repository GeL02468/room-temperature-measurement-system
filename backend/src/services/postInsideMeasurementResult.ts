// 室内環境測定値登録API
import { prisma } from '../lib/prisma'

export const postInsideMeasurementResult = async (requestBody: any) => {
  return await prisma.inside_measure.create({
    data: {
        inside_temperature: requestBody.inside_temperature, 
        inside_humidity: requestBody.inside_humidity, 
        inside_measure_palce: requestBody.inside_measure_palce, 
        inside_air_pressure: requestBody.inside_air_pressure,
        inside_measure_date: new Date(),
    },
  });
};