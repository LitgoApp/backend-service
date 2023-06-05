import { z } from 'zod';
import { RegionPointWhereUniqueInputObjectSchema } from './RegionPointWhereUniqueInput.schema';
import { RegionPointUpdateWithoutRegionInputObjectSchema } from './RegionPointUpdateWithoutRegionInput.schema';
import { RegionPointUncheckedUpdateWithoutRegionInputObjectSchema } from './RegionPointUncheckedUpdateWithoutRegionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionPointUpdateWithWhereUniqueWithoutRegionInput> =
  z
    .object({
      where: z.lazy(() => RegionPointWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => RegionPointUpdateWithoutRegionInputObjectSchema),
        z.lazy(() => RegionPointUncheckedUpdateWithoutRegionInputObjectSchema),
      ]),
    })
    .strict();

export const RegionPointUpdateWithWhereUniqueWithoutRegionInputObjectSchema =
  Schema;
