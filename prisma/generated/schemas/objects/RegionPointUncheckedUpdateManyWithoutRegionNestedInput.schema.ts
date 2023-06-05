import { z } from 'zod';
import { RegionPointCreateWithoutRegionInputObjectSchema } from './RegionPointCreateWithoutRegionInput.schema';
import { RegionPointUncheckedCreateWithoutRegionInputObjectSchema } from './RegionPointUncheckedCreateWithoutRegionInput.schema';
import { RegionPointCreateOrConnectWithoutRegionInputObjectSchema } from './RegionPointCreateOrConnectWithoutRegionInput.schema';
import { RegionPointUpsertWithWhereUniqueWithoutRegionInputObjectSchema } from './RegionPointUpsertWithWhereUniqueWithoutRegionInput.schema';
import { RegionPointCreateManyRegionInputEnvelopeObjectSchema } from './RegionPointCreateManyRegionInputEnvelope.schema';
import { RegionPointWhereUniqueInputObjectSchema } from './RegionPointWhereUniqueInput.schema';
import { RegionPointUpdateWithWhereUniqueWithoutRegionInputObjectSchema } from './RegionPointUpdateWithWhereUniqueWithoutRegionInput.schema';
import { RegionPointUpdateManyWithWhereWithoutRegionInputObjectSchema } from './RegionPointUpdateManyWithWhereWithoutRegionInput.schema';
import { RegionPointScalarWhereInputObjectSchema } from './RegionPointScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionPointUncheckedUpdateManyWithoutRegionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RegionPointCreateWithoutRegionInputObjectSchema),
          z.lazy(() => RegionPointCreateWithoutRegionInputObjectSchema).array(),
          z.lazy(
            () => RegionPointUncheckedCreateWithoutRegionInputObjectSchema,
          ),
          z
            .lazy(
              () => RegionPointUncheckedCreateWithoutRegionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => RegionPointCreateOrConnectWithoutRegionInputObjectSchema,
          ),
          z
            .lazy(
              () => RegionPointCreateOrConnectWithoutRegionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              RegionPointUpsertWithWhereUniqueWithoutRegionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RegionPointUpsertWithWhereUniqueWithoutRegionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RegionPointCreateManyRegionInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => RegionPointWhereUniqueInputObjectSchema),
          z.lazy(() => RegionPointWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => RegionPointWhereUniqueInputObjectSchema),
          z.lazy(() => RegionPointWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => RegionPointWhereUniqueInputObjectSchema),
          z.lazy(() => RegionPointWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => RegionPointWhereUniqueInputObjectSchema),
          z.lazy(() => RegionPointWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              RegionPointUpdateWithWhereUniqueWithoutRegionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RegionPointUpdateWithWhereUniqueWithoutRegionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => RegionPointUpdateManyWithWhereWithoutRegionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RegionPointUpdateManyWithWhereWithoutRegionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => RegionPointScalarWhereInputObjectSchema),
          z.lazy(() => RegionPointScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RegionPointUncheckedUpdateManyWithoutRegionNestedInputObjectSchema =
  Schema;
