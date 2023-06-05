import { z } from 'zod';
import { RegionWhereUniqueInputObjectSchema } from './RegionWhereUniqueInput.schema';
import { RegionCreateWithoutPointsInputObjectSchema } from './RegionCreateWithoutPointsInput.schema';
import { RegionUncheckedCreateWithoutPointsInputObjectSchema } from './RegionUncheckedCreateWithoutPointsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionCreateOrConnectWithoutPointsInput> = z
  .object({
    where: z.lazy(() => RegionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RegionCreateWithoutPointsInputObjectSchema),
      z.lazy(() => RegionUncheckedCreateWithoutPointsInputObjectSchema),
    ]),
  })
  .strict();

export const RegionCreateOrConnectWithoutPointsInputObjectSchema = Schema;
