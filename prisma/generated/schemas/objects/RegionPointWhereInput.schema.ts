import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { RegionRelationFilterObjectSchema } from './RegionRelationFilter.schema';
import { RegionWhereInputObjectSchema } from './RegionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionPointWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RegionPointWhereInputObjectSchema),
        z.lazy(() => RegionPointWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RegionPointWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RegionPointWhereInputObjectSchema),
        z.lazy(() => RegionPointWhereInputObjectSchema).array(),
      ])
      .optional(),
    regionPointId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    regionId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    latitude: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    longitude: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    region: z
      .union([
        z.lazy(() => RegionRelationFilterObjectSchema),
        z.lazy(() => RegionWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const RegionPointWhereInputObjectSchema = Schema;
