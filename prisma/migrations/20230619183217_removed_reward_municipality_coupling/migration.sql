/*
  Warnings:

  - You are about to drop the column `municipalityId` on the `Reward` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Reward" DROP CONSTRAINT "Reward_municipalityId_fkey";

-- AlterTable
ALTER TABLE "Reward" DROP COLUMN "municipalityId";
