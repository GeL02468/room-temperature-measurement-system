-- AlterTable
ALTER TABLE "Device" ALTER COLUMN "geo_location_x" DROP NOT NULL,
ALTER COLUMN "geo_location_y" DROP NOT NULL,
ALTER COLUMN "temperature" DROP NOT NULL,
ALTER COLUMN "humidity" DROP NOT NULL,
ALTER COLUMN "air_pressure" DROP NOT NULL,
ALTER COLUMN "measurement_time" DROP NOT NULL;
