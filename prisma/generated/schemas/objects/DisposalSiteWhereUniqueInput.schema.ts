import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DisposalSiteWhereUniqueInput> = z
  .object({
    disposalSiteId: z.string().optional(),
  })
  .strict();

export const DisposalSiteWhereUniqueInputObjectSchema = Schema;
