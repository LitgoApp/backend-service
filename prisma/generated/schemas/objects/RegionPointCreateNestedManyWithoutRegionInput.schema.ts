import { z } from 'zod';
import { RegionPointCreateWithoutRegionInputObjectSchema } from './RegionPointCreateWithoutRegionInput.schema';
import { RegionPointUncheckedCreateWithoutRegionInputObjectSchema } from './RegionPointUncheckedCreateWithoutRegionInput.schema';
import { RegionPointCreateOrConnectWithoutRegionInputObjectSchema } from './RegionPointCreateOrConnectWithoutRegionInput.schema';
import { RegionPointCreateManyRegionInputEnvelopeObjectSchema } from './RegionPointCreateManyRegionInputEnvelope.schema';
import { RegionPointWhereUniqueInputObjectSchema } from './RegionPointWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionPointCreateNestedManyWithoutRegionInput> =
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
      createMany: z
        .lazy(() => RegionPointCreateManyRegionInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => RegionPointWhereUniqueInputObjectSchema),
          z.lazy(() => RegionPointWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RegionPointCreateNestedManyWithoutRegionInputObjectSchema = Schema;
