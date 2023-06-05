import { z } from 'zod';
import { MunicipalityCreateNestedOneWithoutRegionsInputObjectSchema } from './MunicipalityCreateNestedOneWithoutRegionsInput.schema';
import { RegionPointCreateNestedManyWithoutRegionInputObjectSchema } from './RegionPointCreateNestedManyWithoutRegionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionCreateInput> = z
  .object({
    regionId: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    municipality: z.lazy(
      () => MunicipalityCreateNestedOneWithoutRegionsInputObjectSchema,
    ),
    points: z
      .lazy(() => RegionPointCreateNestedManyWithoutRegionInputObjectSchema)
      .optional(),
  })
  .strict();

export const RegionCreateInputObjectSchema = Schema;
