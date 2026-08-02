/*
  Warnings:

  - The primary key for the `InsideHistory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `inside_hisotry_id` on the `InsideHistory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "InsideHistory" DROP CONSTRAINT "InsideHistory_pkey",
DROP COLUMN "inside_hisotry_id",
ADD COLUMN     "inside_history_id" SERIAL NOT NULL,
ADD CONSTRAINT "InsideHistory_pkey" PRIMARY KEY ("inside_history_id");
