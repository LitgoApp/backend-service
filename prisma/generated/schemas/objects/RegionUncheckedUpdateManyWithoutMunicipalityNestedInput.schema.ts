import { z } from 'zod';
import { RegionCreateWithoutMunicipalityInputObjectSchema } from './RegionCreateWithoutMunicipalityInput.schema';
import { RegionUncheckedCreateWithoutMunicipalityInputObjectSchema } from './RegionUncheckedCreateWithoutMunicipalityInput.schema';
import { RegionCreateOrConnectWithoutMunicipalityInputObjectSchema } from './RegionCreateOrConnectWithoutMunicipalityInput.schema';
import { RegionUpsertWithWhereUniqueWithoutMunicipalityInputObjectSchema } from './RegionUpsertWithWhereUniqueWithoutMunicipalityInput.schema';
import { RegionCreateManyMunicipalityInputEnvelopeObjectSchema } from './RegionCreateManyMunicipalityInputEnvelope.schema';
import { RegionWhereUniqueInputObjectSchema } from './RegionWhereUniqueInput.schema';
import { RegionUpdateWithWhereUniqueWithoutMunicipalityInputObjectSchema } from './RegionUpdateWithWhereUniqueWithoutMunicipalityInput.schema';
import { RegionUpdateManyWithWhereWithoutMunicipalityInputObjectSchema } from './RegionUpdateManyWithWhereWithoutMunicipalityInput.schema';
import { RegionScalarWhereInputObjectSchema } from './RegionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionUncheckedUpdateManyWithoutMunicipalityNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              RegionUpsertWithWhereUniqueWithoutMunicipalityInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RegionUpsertWithWhereUniqueWithoutMunicipalityInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RegionCreateManyMunicipalityInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => RegionWhereUniqueInputObjectSchema),
          z.lazy(() => RegionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => RegionWhereUniqueInputObjectSchema),
          z.lazy(() => RegionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => RegionWhereUniqueInputObjectSchema),
          z.lazy(() => RegionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => RegionWhereUniqueInputObjectSchema),
          z.lazy(() => RegionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              RegionUpdateWithWhereUniqueWithoutMunicipalityInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RegionUpdateWithWhereUniqueWithoutMunicipalityInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => RegionUpdateManyWithWhereWithoutMunicipalityInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RegionUpdateManyWithWhereWithoutMunicipalityInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => RegionScalarWhereInputObjectSchema),
          z.lazy(() => RegionScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RegionUncheckedUpdateManyWithoutMunicipalityNestedInputObjectSchema =
  Schema;
