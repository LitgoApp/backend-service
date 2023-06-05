import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserMinAggregateInputType> = z
  .object({
    userId: z.literal(true).optional(),
    email: z.literal(true).optional(),
    name: z.literal(true).optional(),
    password: z.literal(true).optional(),
    level: z.literal(true).optional(),
    points: z.literal(true).optional(),
    fraudLevel: z.literal(true).optional(),
    address: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict();

export const UserMinAggregateInputObjectSchema = Schema;
