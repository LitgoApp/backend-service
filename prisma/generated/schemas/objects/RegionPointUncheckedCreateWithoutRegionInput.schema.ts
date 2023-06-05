import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionPointUncheckedCreateWithoutRegionInput> = z
  .object({
    regionPointId: z.string().optional(),
    latitude: z.number(),
    longitude: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const RegionPointUncheckedCreateWithoutRegionInputObjectSchema = Schema;
