// 閾値設定API
import { prisma } from '../lib/prisma'
import type { thresholdValue } from '../DTO/thresholdSchema'

export const putThreshold = async (requestBody: thresholdValue) => {
  const result = await prisma.threshold.update({
    where: { threshold_id: 1 },
    data: {
      threshold_id: requestBody.id,  
      max_temperature: requestBody.maxTemperature, 
      min_temperature: requestBody.minTemperature, 
      max_humidity: requestBody.maxHumidity,
      min_humidity: requestBody.minHumidity, 
      max_air_pressure: requestBody.maxAirPressure, 
      min_air_pressure: requestBody.minAirPressure,
    },
  });
  return result;
};