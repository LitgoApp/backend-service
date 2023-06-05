import { z } from 'zod';
import { RegionCreateWithoutPointsInputObjectSchema } from './RegionCreateWithoutPointsInput.schema';
import { RegionUncheckedCreateWithoutPointsInputObjectSchema } from './RegionUncheckedCreateWithoutPointsInput.schema';
import { RegionCreateOrConnectWithoutPointsInputObjectSchema } from './RegionCreateOrConnectWithoutPointsInput.schema';
import { RegionUpsertWithoutPointsInputObjectSchema } from './RegionUpsertWithoutPointsInput.schema';
import { RegionWhereUniqueInputObjectSchema } from './RegionWhereUniqueInput.schema';
import { RegionUpdateWithoutPointsInputObjectSchema } from './RegionUpdateWithoutPointsInput.schema';
import { RegionUncheckedUpdateWithoutPointsInputObjectSchema } from './RegionUncheckedUpdateWithoutPointsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionUpdateOneRequiredWithoutPointsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RegionCreateWithoutPointsInputObjectSchema),
          z.lazy(() => RegionUncheckedCreateWithoutPointsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => RegionCreateOrConnectWithoutPointsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => RegionUpsertWithoutPointsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => RegionWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => RegionUpdateWithoutPointsInputObjectSchema),
          z.lazy(() => RegionUncheckedUpdateWithoutPointsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const RegionUpdateOneRequiredWithoutPointsNestedInputObjectSchema =
  Schema;
