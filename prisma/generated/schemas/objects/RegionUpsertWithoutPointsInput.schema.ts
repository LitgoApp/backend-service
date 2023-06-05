import { z } from 'zod';
import { RegionUpdateWithoutPointsInputObjectSchema } from './RegionUpdateWithoutPointsInput.schema';
import { RegionUncheckedUpdateWithoutPointsInputObjectSchema } from './RegionUncheckedUpdateWithoutPointsInput.schema';
import { RegionCreateWithoutPointsInputObjectSchema } from './RegionCreateWithoutPointsInput.schema';
import { RegionUncheckedCreateWithoutPointsInputObjectSchema } from './RegionUncheckedCreateWithoutPointsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionUpsertWithoutPointsInput> = z
  .object({
    update: z.union([
      z.lazy(() => RegionUpdateWithoutPointsInputObjectSchema),
      z.lazy(() => RegionUncheckedUpdateWithoutPointsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RegionCreateWithoutPointsInputObjectSchema),
      z.lazy(() => RegionUncheckedCreateWithoutPointsInputObjectSchema),
    ]),
  })
  .strict();

export const RegionUpsertWithoutPointsInputObjectSchema = Schema;
