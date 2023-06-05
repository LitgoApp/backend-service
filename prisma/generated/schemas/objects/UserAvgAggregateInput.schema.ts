import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserAvgAggregateInputType> = z
  .object({
    level: z.literal(true).optional(),
    points: z.literal(true).optional(),
    fraudLevel: z.literal(true).optional(),
  })
  .strict();

export const UserAvgAggregateInputObjectSchema = Schema;
