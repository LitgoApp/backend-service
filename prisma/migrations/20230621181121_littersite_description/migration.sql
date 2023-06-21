/*
  Warnings:

  - Added the required column `description` to the `LitterSite` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LitterSite" ADD COLUMN     "description" TEXT NOT NULL;
