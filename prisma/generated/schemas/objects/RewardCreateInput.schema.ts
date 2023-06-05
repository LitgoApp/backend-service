import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RewardCreateInput> = z
  .object({
    rewardId: z.string().optional(),
    name: z.string(),
    cost: z.number(),
    description: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const RewardCreateInputObjectSchema = Schema;
