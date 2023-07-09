/*
  Warnings:

  - The primary key for the `DisposalSite` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `disposalSiteId` on the `DisposalSite` table. All the data in the column will be lost.
  - The primary key for the `LitterSite` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `litterSiteId` on the `LitterSite` table. All the data in the column will be lost.
  - The primary key for the `Municipality` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `municipalityId` on the `Municipality` table. All the data in the column will be lost.
  - The primary key for the `PointChange` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `pointChangeId` on the `PointChange` table. All the data in the column will be lost.
  - The primary key for the `Region` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `regionId` on the `Region` table. All the data in the column will be lost.
  - The primary key for the `RegionPoint` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `regionPointId` on the `RegionPoint` table. All the data in the column will be lost.
  - The primary key for the `Reward` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `rewardId` on the `Reward` table. All the data in the column will be lost.
  - The primary key for the `RewardTransaction` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `rewardTransactionId` on the `RewardTransaction` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Municipality` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `DisposalSite` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `LitterSite` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `id` to the `Municipality` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `PointChange` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `Region` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `RegionPoint` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `Reward` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `RewardTransaction` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DisposalSite" DROP CONSTRAINT "DisposalSite_municipalityId_fkey";

-- DropForeignKey
ALTER TABLE "LitterSite" DROP CONSTRAINT "LitterSite_collectorUserId_fkey";

-- DropForeignKey
ALTER TABLE "LitterSite" DROP CONSTRAINT "LitterSite_reporterUserId_fkey";

-- DropForeignKey
ALTER TABLE "Municipality" DROP CONSTRAINT "Municipality_municipalityId_fkey";

-- DropForeignKey
ALTER TABLE "PointChange" DROP CONSTRAINT "PointChange_userId_fkey";

-- DropForeignKey
ALTER TABLE "Region" DROP CONSTRAINT "Region_municipalityId_fkey";

-- DropForeignKey
ALTER TABLE "RegionPoint" DROP CONSTRAINT "RegionPoint_regionId_fkey";

-- DropForeignKey
ALTER TABLE "RewardTransaction" DROP CONSTRAINT "RewardTransaction_rewardId_fkey";

-- DropForeignKey
ALTER TABLE "RewardTransaction" DROP CONSTRAINT "RewardTransaction_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_userId_fkey";

-- DropIndex
DROP INDEX "Municipality_municipalityId_key";

-- DropIndex
DROP INDEX "User_userId_key";

-- AlterTable
ALTER TABLE "DisposalSite" DROP CONSTRAINT "DisposalSite_pkey",
DROP COLUMN "disposalSiteId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "DisposalSite_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "LitterSite" DROP CONSTRAINT "LitterSite_pkey",
DROP COLUMN "litterSiteId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "LitterSite_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Municipality" DROP CONSTRAINT "Municipality_pkey",
DROP COLUMN "municipalityId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Municipality_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "PointChange" DROP CONSTRAINT "PointChange_pkey",
DROP COLUMN "pointChangeId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "PointChange_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Region" DROP CONSTRAINT "Region_pkey",
DROP COLUMN "regionId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Region_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "RegionPoint" DROP CONSTRAINT "RegionPoint_pkey",
DROP COLUMN "regionPointId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "RegionPoint_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Reward" DROP CONSTRAINT "Reward_pkey",
DROP COLUMN "rewardId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Reward_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "RewardTransaction" DROP CONSTRAINT "RewardTransaction_pkey",
DROP COLUMN "rewardTransactionId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "RewardTransaction_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "userId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Municipality_id_key" ON "Municipality"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_id_fkey" FOREIGN KEY ("id") REFERENCES "UserAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Municipality" ADD CONSTRAINT "Municipality_id_fkey" FOREIGN KEY ("id") REFERENCES "MunicipalityAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Region" ADD CONSTRAINT "Region_municipalityId_fkey" FOREIGN KEY ("municipalityId") REFERENCES "Municipality"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegionPoint" ADD CONSTRAINT "RegionPoint_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisposalSite" ADD CONSTRAINT "DisposalSite_municipalityId_fkey" FOREIGN KEY ("municipalityId") REFERENCES "Municipality"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LitterSite" ADD CONSTRAINT "LitterSite_reporterUserId_fkey" FOREIGN KEY ("reporterUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LitterSite" ADD CONSTRAINT "LitterSite_collectorUserId_fkey" FOREIGN KEY ("collectorUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RewardTransaction" ADD CONSTRAINT "RewardTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RewardTransaction" ADD CONSTRAINT "RewardTransaction_rewardId_fkey" FOREIGN KEY ("rewardId") REFERENCES "Reward"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PointChange" ADD CONSTRAINT "PointChange_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
