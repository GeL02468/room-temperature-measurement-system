/*
  Warnings:

  - The primary key for the `Threshold` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `threshold_id` on the `Threshold` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Threshold" DROP CONSTRAINT "Threshold_pkey",
DROP COLUMN "threshold_id",
ADD CONSTRAINT "Threshold_pkey" PRIMARY KEY ("device_id");
