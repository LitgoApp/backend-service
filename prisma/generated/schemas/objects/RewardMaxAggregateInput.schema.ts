import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RewardMaxAggregateInputType> = z
  .object({
    rewardId: z.literal(true).optional(),
    name: z.literal(true).optional(),
    cost: z.literal(true).optional(),
    description: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict();

export const RewardMaxAggregateInputObjectSchema = Schema;
