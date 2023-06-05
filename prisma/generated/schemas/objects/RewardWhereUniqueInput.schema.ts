import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RewardWhereUniqueInput> = z
  .object({
    rewardId: z.string().optional(),
  })
  .strict();

export const RewardWhereUniqueInputObjectSchema = Schema;
