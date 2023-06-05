import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DisposalSiteCountAggregateInputType> = z
  .object({
    disposalSiteId: z.literal(true).optional(),
    municipalityId: z.literal(true).optional(),
    latitude: z.literal(true).optional(),
    longitude: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const DisposalSiteCountAggregateInputObjectSchema = Schema;
