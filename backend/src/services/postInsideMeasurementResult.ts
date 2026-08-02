// 室内環境測定値登録API
import { prisma } from '../lib/prisma'

export const postInsideMeasurementResult = async (requestBody: any) => {
  return await prisma.insideHistory.create({
    data: {
      device_id: requestBody.device_id,  
      temperature: requestBody.inside_temperature, 
      humidity: requestBody.inside_humidity, 
      air_pressure: requestBody.inside_air_pressure,
      measurement_time: new Date(),
    },
  });
};