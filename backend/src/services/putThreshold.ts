// 閾値設定API
import { prisma } from '../lib/prisma'

export const putThreshold = async (requestBody: any) => {
  const result = await prisma.threshold.update({
    where: { threshold_id: 1 },
    data: {
        threshold_id: requestBody.id,  
        max_temperature: requestBody.outsideMaxTemperature, 
        min_temperature: requestBody.outsideMinTemperature, 
        max_humidity: requestBody.outsideMaxHumidity,
        min_humidity: requestBody.outsideMinHumidity, 
        max_air_pressure: requestBody.outsideMaxAirPressure, 
        min_air_pressure: requestBody.outsideMinAirPressure,
    },
  });
  return result;
};