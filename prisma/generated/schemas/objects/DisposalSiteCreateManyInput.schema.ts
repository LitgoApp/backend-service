import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DisposalSiteCreateManyInput> = z
  .object({
    disposalSiteId: z.string().optional(),
    municipalityId: z.string(),
    latitude: z.number(),
    longitude: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const DisposalSiteCreateManyInputObjectSchema = Schema;
