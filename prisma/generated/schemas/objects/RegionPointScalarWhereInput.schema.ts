import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionPointScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RegionPointScalarWhereInputObjectSchema),
        z.lazy(() => RegionPointScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RegionPointScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RegionPointScalarWhereInputObjectSchema),
        z.lazy(() => RegionPointScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const RegionPointScalarWhereInputObjectSchema = Schema;
