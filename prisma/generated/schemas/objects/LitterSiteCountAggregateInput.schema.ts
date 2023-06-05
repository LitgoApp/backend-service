import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LitterSiteCountAggregateInputType> = z
  .object({
    litterSiteId: z.literal(true).optional(),
    reporterUserId: z.literal(true).optional(),
    collectorUserId: z.literal(true).optional(),
    isCollected: z.literal(true).optional(),
    image: z.literal(true).optional(),
    harmful: z.literal(true).optional(),
    latitude: z.literal(true).optional(),
    longitude: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const LitterSiteCountAggregateInputObjectSchema = Schema;
