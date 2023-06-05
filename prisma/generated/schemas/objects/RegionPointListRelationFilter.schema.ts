import { z } from 'zod';
import { RegionPointWhereInputObjectSchema } from './RegionPointWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionPointListRelationFilter> = z
  .object({
    every: z.lazy(() => RegionPointWhereInputObjectSchema).optional(),
    some: z.lazy(() => RegionPointWhereInputObjectSchema).optional(),
    none: z.lazy(() => RegionPointWhereInputObjectSchema).optional(),
  })
  .strict();

export const RegionPointListRelationFilterObjectSchema = Schema;
