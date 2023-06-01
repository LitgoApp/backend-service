-- CreateIndex
CREATE INDEX "DisposalSite_latitude_longitude_idx" ON "DisposalSite"("latitude", "longitude");

-- CreateIndex
CREATE INDEX "LitterSite_latitude_longitude_idx" ON "LitterSite"("latitude", "longitude");

-- CreateIndex
CREATE INDEX "RegionPoint_latitude_longitude_idx" ON "RegionPoint"("latitude", "longitude");
