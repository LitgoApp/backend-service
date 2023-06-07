/*
  Warnings:

  - Added the required column `municipalityId` to the `Reward` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DisposalSite" DROP CONSTRAINT "DisposalSite_municipalityId_fkey";

-- DropForeignKey
ALTER TABLE "Region" DROP CONSTRAINT "Region_municipalityId_fkey";

-- DropForeignKey
ALTER TABLE "RegionPoint" DROP CONSTRAINT "RegionPoint_regionId_fkey";

-- AlterTable
ALTER TABLE "Reward" ADD COLUMN     "municipalityId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Region" ADD CONSTRAINT "Region_municipalityId_fkey" FOREIGN KEY ("municipalityId") REFERENCES "Municipality"("municipalityId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegionPoint" ADD CONSTRAINT "RegionPoint_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("regionId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisposalSite" ADD CONSTRAINT "DisposalSite_municipalityId_fkey" FOREIGN KEY ("municipalityId") REFERENCES "Municipality"("municipalityId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reward" ADD CONSTRAINT "Reward_municipalityId_fkey" FOREIGN KEY ("municipalityId") REFERENCES "Municipality"("municipalityId") ON DELETE CASCADE ON UPDATE CASCADE;
