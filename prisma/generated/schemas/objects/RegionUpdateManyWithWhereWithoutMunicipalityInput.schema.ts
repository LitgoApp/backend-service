import { z } from 'zod';
import { RegionScalarWhereInputObjectSchema } from './RegionScalarWhereInput.schema';
import { RegionUpdateManyMutationInputObjectSchema } from './RegionUpdateManyMutationInput.schema';
import { RegionUncheckedUpdateManyWithoutRegionsInputObjectSchema } from './RegionUncheckedUpdateManyWithoutRegionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionUpdateManyWithWhereWithoutMunicipalityInput> =
  z
    .object({
      where: z.lazy(() => RegionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => RegionUpdateManyMutationInputObjectSchema),
        z.lazy(() => RegionUncheckedUpdateManyWithoutRegionsInputObjectSchema),
      ]),
    })
    .strict();

export const RegionUpdateManyWithWhereWithoutMunicipalityInputObjectSchema =
  Schema;
