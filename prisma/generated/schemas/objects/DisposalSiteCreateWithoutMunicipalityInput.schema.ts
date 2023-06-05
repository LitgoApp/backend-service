import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DisposalSiteCreateWithoutMunicipalityInput> = z
  .object({
    disposalSiteId: z.string().optional(),
    latitude: z.number(),
    longitude: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const DisposalSiteCreateWithoutMunicipalityInputObjectSchema = Schema;
