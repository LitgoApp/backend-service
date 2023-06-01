-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 0,
    "points" INTEGER NOT NULL DEFAULT 0,
    "fraudLevel" INTEGER NOT NULL DEFAULT 0,
    "address" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Municipality" (
    "municipalityId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Municipality_pkey" PRIMARY KEY ("municipalityId")
);

-- CreateTable
CREATE TABLE "Region" (
    "regionId" TEXT NOT NULL,
    "municipalityId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("regionId")
);

-- CreateTable
CREATE TABLE "RegionPoint" (
    "regionPointId" TEXT NOT NULL,
    "regionId" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RegionPoint_pkey" PRIMARY KEY ("regionPointId")
);

-- CreateTable
CREATE TABLE "DisposalSite" (
    "disposalSiteId" TEXT NOT NULL,
    "municipalityId" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DisposalSite_pkey" PRIMARY KEY ("disposalSiteId")
);

-- CreateTable
CREATE TABLE "LitterSite" (
    "litterSiteId" TEXT NOT NULL,
    "reporterUserId" TEXT NOT NULL,
    "collectorUserId" TEXT,
    "image" BYTEA NOT NULL,
    "harmful" BOOLEAN NOT NULL DEFAULT false,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LitterSite_pkey" PRIMARY KEY ("litterSiteId")
);

-- CreateTable
CREATE TABLE "Reward" (
    "rewardId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cost" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reward_pkey" PRIMARY KEY ("rewardId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Municipality_email_key" ON "Municipality"("email");

-- AddForeignKey
ALTER TABLE "Region" ADD CONSTRAINT "Region_municipalityId_fkey" FOREIGN KEY ("municipalityId") REFERENCES "Municipality"("municipalityId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegionPoint" ADD CONSTRAINT "RegionPoint_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("regionId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisposalSite" ADD CONSTRAINT "DisposalSite_municipalityId_fkey" FOREIGN KEY ("municipalityId") REFERENCES "Municipality"("municipalityId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LitterSite" ADD CONSTRAINT "LitterSite_reporterUserId_fkey" FOREIGN KEY ("reporterUserId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LitterSite" ADD CONSTRAINT "LitterSite_collectorUserId_fkey" FOREIGN KEY ("collectorUserId") REFERENCES "User"("userId") ON DELETE SET NULL ON UPDATE CASCADE;
