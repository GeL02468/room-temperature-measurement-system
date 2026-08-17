// 閾値設定API
import { prisma } from '../lib/prisma'
import type { thresholdValue } from '../DTO/thresholdSchema'

export const putThreshold = async (deviceId: string, requestBody: thresholdValue) => {
  const result = await prisma.threshold.update({
    where: { device_id: deviceId },
    data: {
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