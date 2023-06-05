import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateManyInput> = z
  .object({
    userId: z.string().optional(),
    email: z.string(),
    name: z.string(),
    password: z.string(),
    level: z.number().optional(),
    points: z.number().optional(),
    fraudLevel: z.number().optional(),
    address: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const UserCreateManyInputObjectSchema = Schema;
