import { z } from 'zod';
import { RegionPointUncheckedCreateNestedManyWithoutRegionInputObjectSchema } from './RegionPointUncheckedCreateNestedManyWithoutRegionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionUncheckedCreateWithoutMunicipalityInput> =
  z
    .object({
      regionId: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      points: z
        .lazy(
          () =>
            RegionPointUncheckedCreateNestedManyWithoutRegionInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const RegionUncheckedCreateWithoutMunicipalityInputObjectSchema = Schema;
