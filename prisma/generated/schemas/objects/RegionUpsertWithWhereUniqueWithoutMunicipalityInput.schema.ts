import { z } from 'zod';
import { RegionWhereUniqueInputObjectSchema } from './RegionWhereUniqueInput.schema';
import { RegionUpdateWithoutMunicipalityInputObjectSchema } from './RegionUpdateWithoutMunicipalityInput.schema';
import { RegionUncheckedUpdateWithoutMunicipalityInputObjectSchema } from './RegionUncheckedUpdateWithoutMunicipalityInput.schema';
import { RegionCreateWithoutMunicipalityInputObjectSchema } from './RegionCreateWithoutMunicipalityInput.schema';
import { RegionUncheckedCreateWithoutMunicipalityInputObjectSchema } from './RegionUncheckedCreateWithoutMunicipalityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionUpsertWithWhereUniqueWithoutMunicipalityInput> =
  z
    .object({
      where: z.lazy(() => RegionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => RegionUpdateWithoutMunicipalityInputObjectSchema),
        z.lazy(() => RegionUncheckedUpdateWithoutMunicipalityInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => RegionCreateWithoutMunicipalityInputObjectSchema),
        z.lazy(() => RegionUncheckedCreateWithoutMunicipalityInputObjectSchema),
      ]),
    })
    .strict();

export const RegionUpsertWithWhereUniqueWithoutMunicipalityInputObjectSchema =
  Schema;
