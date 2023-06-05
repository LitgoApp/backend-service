import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LitterSiteWhereUniqueInput> = z
  .object({
    litterSiteId: z.string().optional(),
  })
  .strict();

export const LitterSiteWhereUniqueInputObjectSchema = Schema;
