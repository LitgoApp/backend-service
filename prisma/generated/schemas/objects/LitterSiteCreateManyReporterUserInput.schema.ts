import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LitterSiteCreateManyReporterUserInput> = z
  .object({
    litterSiteId: z.string().optional(),
    collectorUserId: z.string().optional().nullable(),
    isCollected: z.boolean().optional(),
    image: z.instanceof(Buffer),
    harmful: z.boolean().optional(),
    latitude: z.number(),
    longitude: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const LitterSiteCreateManyReporterUserInputObjectSchema = Schema;
