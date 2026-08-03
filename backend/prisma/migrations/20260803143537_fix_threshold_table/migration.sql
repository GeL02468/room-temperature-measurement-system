/*
  Warnings:

  - You are about to drop the column `threshold_id` on the `Device` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[device_id]` on the table `Threshold` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `device_id` to the `Threshold` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Device" DROP CONSTRAINT "Device_threshold_id_fkey";

-- DropIndex
DROP INDEX "Device_threshold_id_key";

-- AlterTable
ALTER TABLE "Device" DROP COLUMN "threshold_id";

-- AlterTable
ALTER TABLE "Threshold" ADD COLUMN     "device_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Threshold_device_id_key" ON "Threshold"("device_id");

-- AddForeignKey
ALTER TABLE "Threshold" ADD CONSTRAINT "Threshold_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "Device"("device_id") ON DELETE RESTRICT ON UPDATE CASCADE;
