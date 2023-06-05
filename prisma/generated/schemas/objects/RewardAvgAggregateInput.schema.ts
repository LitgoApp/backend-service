import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RewardAvgAggregateInputType> = z
  .object({
    cost: z.literal(true).optional(),
  })
  .strict();

export const RewardAvgAggregateInputObjectSchema = Schema;
