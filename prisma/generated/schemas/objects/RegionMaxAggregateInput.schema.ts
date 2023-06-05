import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionMaxAggregateInputType> = z
  .object({
    regionId: z.literal(true).optional(),
    municipalityId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict();

export const RegionMaxAggregateInputObjectSchema = Schema;
