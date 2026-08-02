// 室外環境測定値登録API
import { prisma } from '../lib/prisma'

export const postOutsideMeasurementResult = async (requestBody: any) => {
  return await prisma.outsideHistory.create({
    data: {
        temperature: requestBody.main.temp, 
        humidity: requestBody.main.humidity, 
        air_pressure: requestBody.main.pressure,
        measurement_time: new Date(),
    },
  });
};