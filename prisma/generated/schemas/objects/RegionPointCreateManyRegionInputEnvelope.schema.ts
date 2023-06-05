import { z } from 'zod';
import { RegionPointCreateManyRegionInputObjectSchema } from './RegionPointCreateManyRegionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionPointCreateManyRegionInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => RegionPointCreateManyRegionInputObjectSchema),
      z.lazy(() => RegionPointCreateManyRegionInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const RegionPointCreateManyRegionInputEnvelopeObjectSchema = Schema;
