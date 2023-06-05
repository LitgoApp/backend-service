import { z } from 'zod';
import { DisposalSiteWhereInputObjectSchema } from './DisposalSiteWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DisposalSiteListRelationFilter> = z
  .object({
    every: z.lazy(() => DisposalSiteWhereInputObjectSchema).optional(),
    some: z.lazy(() => DisposalSiteWhereInputObjectSchema).optional(),
    none: z.lazy(() => DisposalSiteWhereInputObjectSchema).optional(),
  })
  .strict();

export const DisposalSiteListRelationFilterObjectSchema = Schema;
