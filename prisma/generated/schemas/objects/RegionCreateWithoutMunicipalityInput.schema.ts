import { z } from 'zod';
import { RegionPointCreateNestedManyWithoutRegionInputObjectSchema } from './RegionPointCreateNestedManyWithoutRegionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionCreateWithoutMunicipalityInput> = z
  .object({
    regionId: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    points: z
      .lazy(() => RegionPointCreateNestedManyWithoutRegionInputObjectSchema)
      .optional(),
  })
  .strict();

export const RegionCreateWithoutMunicipalityInputObjectSchema = Schema;
