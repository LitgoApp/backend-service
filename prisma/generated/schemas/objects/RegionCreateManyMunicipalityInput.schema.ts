import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionCreateManyMunicipalityInput> = z
  .object({
    regionId: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const RegionCreateManyMunicipalityInputObjectSchema = Schema;
