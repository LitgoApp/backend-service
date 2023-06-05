import { z } from 'zod';
import { RegionPointWhereUniqueInputObjectSchema } from './RegionPointWhereUniqueInput.schema';
import { RegionPointUpdateWithoutRegionInputObjectSchema } from './RegionPointUpdateWithoutRegionInput.schema';
import { RegionPointUncheckedUpdateWithoutRegionInputObjectSchema } from './RegionPointUncheckedUpdateWithoutRegionInput.schema';
import { RegionPointCreateWithoutRegionInputObjectSchema } from './RegionPointCreateWithoutRegionInput.schema';
import { RegionPointUncheckedCreateWithoutRegionInputObjectSchema } from './RegionPointUncheckedCreateWithoutRegionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionPointUpsertWithWhereUniqueWithoutRegionInput> =
  z
    .object({
      where: z.lazy(() => RegionPointWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => RegionPointUpdateWithoutRegionInputObjectSchema),
        z.lazy(() => RegionPointUncheckedUpdateWithoutRegionInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => RegionPointCreateWithoutRegionInputObjectSchema),
        z.lazy(() => RegionPointUncheckedCreateWithoutRegionInputObjectSchema),
      ]),
    })
    .strict();

export const RegionPointUpsertWithWhereUniqueWithoutRegionInputObjectSchema =
  Schema;
