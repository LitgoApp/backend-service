import { z } from 'zod';
import { RegionWhereUniqueInputObjectSchema } from './RegionWhereUniqueInput.schema';
import { RegionCreateWithoutMunicipalityInputObjectSchema } from './RegionCreateWithoutMunicipalityInput.schema';
import { RegionUncheckedCreateWithoutMunicipalityInputObjectSchema } from './RegionUncheckedCreateWithoutMunicipalityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionCreateOrConnectWithoutMunicipalityInput> =
  z
    .object({
      where: z.lazy(() => RegionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => RegionCreateWithoutMunicipalityInputObjectSchema),
        z.lazy(() => RegionUncheckedCreateWithoutMunicipalityInputObjectSchema),
      ]),
    })
    .strict();

export const RegionCreateOrConnectWithoutMunicipalityInputObjectSchema = Schema;
