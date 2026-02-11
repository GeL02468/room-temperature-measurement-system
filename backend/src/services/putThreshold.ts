// 閾値設定API
import { prisma } from '../lib/prisma'

export const putThreshold = async (requestBody: any) => {
  const result = await prisma.threshold.update({
    where: { id: 1 },
    data: {
        id: requestBody.id,  
        outside_temperature_max_threshold: requestBody.outsideMaxTemperature, 
        outside_temperature_min_threshold: requestBody.outsideMinTemperature, 
        outside_humidity_max_threshold: requestBody.outsideMaxHumidity,
        outside_humidity_min_threshold: requestBody.outsideMinHumidity, 
        outside_air_pressure_max_threshold: requestBody.outsideMaxAirPressure, 
        outside_air_pressure_min_threshold: requestBody.outsideMinAirPressure,
        outside_measure_date: new Date(),
    },
  });
  return result;
};