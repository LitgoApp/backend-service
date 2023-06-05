import { z } from 'zod';
import { RegionWhereInputObjectSchema } from './RegionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionRelationFilter> = z
  .object({
    is: z.lazy(() => RegionWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => RegionWhereInputObjectSchema).optional(),
  })
  .strict();

export const RegionRelationFilterObjectSchema = Schema;
