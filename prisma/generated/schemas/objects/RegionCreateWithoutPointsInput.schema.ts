import { z } from 'zod';
import { MunicipalityCreateNestedOneWithoutRegionsInputObjectSchema } from './MunicipalityCreateNestedOneWithoutRegionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionCreateWithoutPointsInput> = z
  .object({
    regionId: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    municipality: z.lazy(
      () => MunicipalityCreateNestedOneWithoutRegionsInputObjectSchema,
    ),
  })
  .strict();

export const RegionCreateWithoutPointsInputObjectSchema = Schema;
