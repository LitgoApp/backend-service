import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionUncheckedCreateWithoutPointsInput> = z
  .object({
    regionId: z.string().optional(),
    municipalityId: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const RegionUncheckedCreateWithoutPointsInputObjectSchema = Schema;
