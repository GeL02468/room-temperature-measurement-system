// 室外環境測定値登録API
import { prisma } from '../lib/prisma'

export const postOutsideMeasurementResult = async (requestBody: any) => {
  return await prisma.outside_measure.create({
    data: {
        outside_temperature: requestBody.main.temp, 
        outside_humidity: requestBody.main.humidity, 
        outside_air_pressure: requestBody.main.pressure,
        outside_measure_date: new Date(),
    },
  });
};