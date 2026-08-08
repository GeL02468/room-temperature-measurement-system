import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const connectionString = process.env.DATABASE_URL!;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.device.upsert({
    where: { device_id: "00:11:22:33:44:55" },
    update: {},
    create: {
      device_id: "00:11:22:33:44:55",
      device_name: "device1",
      device_status: "Normal",
      geo_location_x: 0,
      geo_location_y: 0,
      temperature: 25,
      humidity: 50,
      air_pressure: 1013,
      measurement_time: new Date(),
    },
  });

  await prisma.threshold.upsert({
    where: { device_id: "00:11:22:33:44:55" },
    update: {},
    create: {
      device_id: "00:11:22:33:44:55",
      max_temperature: 30,
      min_temperature: 10,
      max_humidity: 80,
      min_humidity: 30,
      max_air_pressure: 1100,
      min_air_pressure: 900,
    },
  });

  await prisma.insideHistory.upsert({
    where: { inside_history_id: 1 },
    update: {},
    create: {
      inside_history_id: 1,
      device_id: "00:11:22:33:44:55",
      temperature: 25,
      humidity: 50,
      air_pressure: 1013,
      measurement_time: new Date(),
    },
  });

  await prisma.outsideHistory.upsert({
    where: { outside_history_id: 1 },
    update: {},
    create: {
      outside_history_id: 1,
      device_id: "00:11:22:33:44:55",
      temperature: 25,
      humidity: 50,
      air_pressure: 1013,
      measurement_time: new Date(),
    },
  });

  await prisma.notification.upsert({
    where: { notification_id: 1 },
    update: {},
    create: {
      notification_id: 1,
      device_id: "00:11:22:33:44:55",
      sentence: "Test Message.",
      notification_time: new Date(),
    },
  });

  console.log("seed complete");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });