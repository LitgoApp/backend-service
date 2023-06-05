import { z } from 'zod';
import { LitterSiteWhereInputObjectSchema } from './LitterSiteWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LitterSiteListRelationFilter> = z
  .object({
    every: z.lazy(() => LitterSiteWhereInputObjectSchema).optional(),
    some: z.lazy(() => LitterSiteWhereInputObjectSchema).optional(),
    none: z.lazy(() => LitterSiteWhereInputObjectSchema).optional(),
  })
  .strict();

export const LitterSiteListRelationFilterObjectSchema = Schema;
