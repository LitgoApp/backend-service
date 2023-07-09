/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Municipality` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Municipality` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Municipality` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Municipality` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[municipalityId]` on the table `Municipality` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `PointChange` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rewardCost` to the `RewardTransaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `RewardTransaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Municipality_email_key";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "Municipality" DROP COLUMN "createdAt",
DROP COLUMN "email",
DROP COLUMN "password",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "PointChange" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "RewardTransaction" ADD COLUMN     "rewardCost" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "email",
DROP COLUMN "password",
DROP COLUMN "updatedAt";

-- CreateTable
CREATE TABLE "UserAccount" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "registeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastLoginAt" TIMESTAMP(3),

    CONSTRAINT "UserAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MunicipalityAccount" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "registeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastLoginAt" TIMESTAMP(3),

    CONSTRAINT "MunicipalityAccount_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserAccount_email_key" ON "UserAccount"("email");

-- CreateIndex
CREATE UNIQUE INDEX "MunicipalityAccount_email_key" ON "MunicipalityAccount"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Municipality_municipalityId_key" ON "Municipality"("municipalityId");

-- CreateIndex
CREATE UNIQUE INDEX "User_userId_key" ON "User"("userId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Municipality" ADD CONSTRAINT "Municipality_municipalityId_fkey" FOREIGN KEY ("municipalityId") REFERENCES "MunicipalityAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;
