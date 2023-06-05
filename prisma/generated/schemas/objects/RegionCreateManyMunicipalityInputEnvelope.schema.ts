import { z } from 'zod';
import { RegionCreateManyMunicipalityInputObjectSchema } from './RegionCreateManyMunicipalityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionCreateManyMunicipalityInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => RegionCreateManyMunicipalityInputObjectSchema),
      z.lazy(() => RegionCreateManyMunicipalityInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const RegionCreateManyMunicipalityInputEnvelopeObjectSchema = Schema;
