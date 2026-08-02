/*
  Warnings:

  - You are about to drop the `inside_measure` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `outside_measure` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `threshold` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Normal', 'Error');

-- DropTable
DROP TABLE "inside_measure";

-- DropTable
DROP TABLE "outside_measure";

-- DropTable
DROP TABLE "threshold";

-- CreateTable
CREATE TABLE "InsideHistory" (
    "inside_hisotry_id" SERIAL NOT NULL,
    "device_id" TEXT NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "humidity" DOUBLE PRECISION NOT NULL,
    "air_pressure" DOUBLE PRECISION NOT NULL,
    "measurement_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InsideHistory_pkey" PRIMARY KEY ("inside_hisotry_id")
);

-- CreateTable
CREATE TABLE "OutsideHistory" (
    "outside_history_id" SERIAL NOT NULL,
    "device_id" TEXT NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "humidity" DOUBLE PRECISION NOT NULL,
    "air_pressure" DOUBLE PRECISION NOT NULL,
    "measurement_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OutsideHistory_pkey" PRIMARY KEY ("outside_history_id")
);

-- CreateTable
CREATE TABLE "Threshold" (
    "threshold_id" SERIAL NOT NULL,
    "max_temperature" DOUBLE PRECISION NOT NULL,
    "min_temperature" DOUBLE PRECISION NOT NULL,
    "max_humidity" DOUBLE PRECISION NOT NULL,
    "min_humidity" DOUBLE PRECISION NOT NULL,
    "max_air_pressure" DOUBLE PRECISION NOT NULL,
    "min_air_pressure" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Threshold_pkey" PRIMARY KEY ("threshold_id")
);

-- CreateTable
CREATE TABLE "Device" (
    "device_id" TEXT NOT NULL,
    "device_name" TEXT NOT NULL,
    "threshold_id" INTEGER NOT NULL,
    "device_status" "Status" NOT NULL,
    "geo_location_x" INTEGER NOT NULL,
    "geo_location_y" INTEGER NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "humidity" DOUBLE PRECISION NOT NULL,
    "air_pressure" DOUBLE PRECISION NOT NULL,
    "measurement_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("device_id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "notification_id" SERIAL NOT NULL,
    "device_id" TEXT NOT NULL,
    "sentence" TEXT NOT NULL,
    "notification_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("notification_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Device_threshold_id_key" ON "Device"("threshold_id");

-- AddForeignKey
ALTER TABLE "InsideHistory" ADD CONSTRAINT "InsideHistory_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "Device"("device_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OutsideHistory" ADD CONSTRAINT "OutsideHistory_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "Device"("device_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_threshold_id_fkey" FOREIGN KEY ("threshold_id") REFERENCES "Threshold"("threshold_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "Device"("device_id") ON DELETE RESTRICT ON UPDATE CASCADE;
