import { z } from 'zod';
import { RegionPointScalarWhereInputObjectSchema } from './RegionPointScalarWhereInput.schema';
import { RegionPointUpdateManyMutationInputObjectSchema } from './RegionPointUpdateManyMutationInput.schema';
import { RegionPointUncheckedUpdateManyWithoutPointsInputObjectSchema } from './RegionPointUncheckedUpdateManyWithoutPointsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionPointUpdateManyWithWhereWithoutRegionInput> =
  z
    .object({
      where: z.lazy(() => RegionPointScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => RegionPointUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => RegionPointUncheckedUpdateManyWithoutPointsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RegionPointUpdateManyWithWhereWithoutRegionInputObjectSchema =
  Schema;
