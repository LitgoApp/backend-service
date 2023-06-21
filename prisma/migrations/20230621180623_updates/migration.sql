/*
  Warnings:

  - You are about to drop the column `harmful` on the `LitterSite` table. All the data in the column will be lost.
  - You are about to drop the column `fraudLevel` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `level` on the `User` table. All the data in the column will be lost.
  - Added the required column `litterCount` to the `LitterSite` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "HarmLevel" AS ENUM ('HAZARDOUS', 'CAUTION', 'NONE');

-- AlterTable
ALTER TABLE "LitterSite" DROP COLUMN "harmful",
ADD COLUMN     "harm" "HarmLevel" NOT NULL DEFAULT 'NONE',
ADD COLUMN     "litterCount" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "fraudLevel",
DROP COLUMN "level";
