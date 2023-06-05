import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RewardSumAggregateInputType> = z
  .object({
    cost: z.literal(true).optional(),
  })
  .strict();

export const RewardSumAggregateInputObjectSchema = Schema;
