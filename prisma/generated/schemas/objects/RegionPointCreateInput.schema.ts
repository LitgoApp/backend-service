import { z } from 'zod';
import { RegionCreateNestedOneWithoutPointsInputObjectSchema } from './RegionCreateNestedOneWithoutPointsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionPointCreateInput> = z
  .object({
    regionPointId: z.string().optional(),
    latitude: z.number(),
    longitude: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    region: z.lazy(() => RegionCreateNestedOneWithoutPointsInputObjectSchema),
  })
  .strict();

export const RegionPointCreateInputObjectSchema = Schema;
