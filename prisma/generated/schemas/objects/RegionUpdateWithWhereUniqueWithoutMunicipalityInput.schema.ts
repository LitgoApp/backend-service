import { z } from 'zod';
import { RegionWhereUniqueInputObjectSchema } from './RegionWhereUniqueInput.schema';
import { RegionUpdateWithoutMunicipalityInputObjectSchema } from './RegionUpdateWithoutMunicipalityInput.schema';
import { RegionUncheckedUpdateWithoutMunicipalityInputObjectSchema } from './RegionUncheckedUpdateWithoutMunicipalityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionUpdateWithWhereUniqueWithoutMunicipalityInput> =
  z
    .object({
      where: z.lazy(() => RegionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => RegionUpdateWithoutMunicipalityInputObjectSchema),
        z.lazy(() => RegionUncheckedUpdateWithoutMunicipalityInputObjectSchema),
      ]),
    })
    .strict();

export const RegionUpdateWithWhereUniqueWithoutMunicipalityInputObjectSchema =
  Schema;
