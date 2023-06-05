import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionWhereUniqueInput> = z
  .object({
    regionId: z.string().optional(),
  })
  .strict();

export const RegionWhereUniqueInputObjectSchema = Schema;
