import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionPointMinAggregateInputType> = z
  .object({
    regionPointId: z.literal(true).optional(),
    regionId: z.literal(true).optional(),
    latitude: z.literal(true).optional(),
    longitude: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict();

export const RegionPointMinAggregateInputObjectSchema = Schema;
