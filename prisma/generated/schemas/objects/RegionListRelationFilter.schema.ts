import { z } from 'zod';
import { RegionWhereInputObjectSchema } from './RegionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionListRelationFilter> = z
  .object({
    every: z.lazy(() => RegionWhereInputObjectSchema).optional(),
    some: z.lazy(() => RegionWhereInputObjectSchema).optional(),
    none: z.lazy(() => RegionWhereInputObjectSchema).optional(),
  })
  .strict();

export const RegionListRelationFilterObjectSchema = Schema;
