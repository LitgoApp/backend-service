import { z } from 'zod';
import { RegionPointWhereUniqueInputObjectSchema } from './RegionPointWhereUniqueInput.schema';
import { RegionPointCreateWithoutRegionInputObjectSchema } from './RegionPointCreateWithoutRegionInput.schema';
import { RegionPointUncheckedCreateWithoutRegionInputObjectSchema } from './RegionPointUncheckedCreateWithoutRegionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionPointCreateOrConnectWithoutRegionInput> = z
  .object({
    where: z.lazy(() => RegionPointWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RegionPointCreateWithoutRegionInputObjectSchema),
      z.lazy(() => RegionPointUncheckedCreateWithoutRegionInputObjectSchema),
    ]),
  })
  .strict();

export const RegionPointCreateOrConnectWithoutRegionInputObjectSchema = Schema;
