import { z } from 'zod';
import { RegionCreateWithoutPointsInputObjectSchema } from './RegionCreateWithoutPointsInput.schema';
import { RegionUncheckedCreateWithoutPointsInputObjectSchema } from './RegionUncheckedCreateWithoutPointsInput.schema';
import { RegionCreateOrConnectWithoutPointsInputObjectSchema } from './RegionCreateOrConnectWithoutPointsInput.schema';
import { RegionWhereUniqueInputObjectSchema } from './RegionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionCreateNestedOneWithoutPointsInput> = z
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
    connect: z.lazy(() => RegionWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const RegionCreateNestedOneWithoutPointsInputObjectSchema = Schema;
