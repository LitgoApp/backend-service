import { z } from 'zod';
import { RegionCreateWithoutMunicipalityInputObjectSchema } from './RegionCreateWithoutMunicipalityInput.schema';
import { RegionUncheckedCreateWithoutMunicipalityInputObjectSchema } from './RegionUncheckedCreateWithoutMunicipalityInput.schema';
import { RegionCreateOrConnectWithoutMunicipalityInputObjectSchema } from './RegionCreateOrConnectWithoutMunicipalityInput.schema';
import { RegionCreateManyMunicipalityInputEnvelopeObjectSchema } from './RegionCreateManyMunicipalityInputEnvelope.schema';
import { RegionWhereUniqueInputObjectSchema } from './RegionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionUncheckedCreateNestedManyWithoutMunicipalityInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RegionCreateWithoutMunicipalityInputObjectSchema),
          z
            .lazy(() => RegionCreateWithoutMunicipalityInputObjectSchema)
            .array(),
          z.lazy(
            () => RegionUncheckedCreateWithoutMunicipalityInputObjectSchema,
          ),
          z
            .lazy(
              () => RegionUncheckedCreateWithoutMunicipalityInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => RegionCreateOrConnectWithoutMunicipalityInputObjectSchema,
          ),
          z
            .lazy(
              () => RegionCreateOrConnectWithoutMunicipalityInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RegionCreateManyMunicipalityInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => RegionWhereUniqueInputObjectSchema),
          z.lazy(() => RegionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RegionUncheckedCreateNestedManyWithoutMunicipalityInputObjectSchema =
  Schema;
