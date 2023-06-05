import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DisposalSiteAvgAggregateInputType> = z
  .object({
    latitude: z.literal(true).optional(),
    longitude: z.literal(true).optional(),
  })
  .strict();

export const DisposalSiteAvgAggregateInputObjectSchema = Schema;
