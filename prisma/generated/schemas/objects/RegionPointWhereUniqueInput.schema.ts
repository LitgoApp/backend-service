import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionPointWhereUniqueInput> = z
  .object({
    regionPointId: z.string().optional(),
  })
  .strict();

export const RegionPointWhereUniqueInputObjectSchema = Schema;
