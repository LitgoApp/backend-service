import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RegionScalarWhereInputObjectSchema),
        z.lazy(() => RegionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RegionScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RegionScalarWhereInputObjectSchema),
        z.lazy(() => RegionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    regionId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    municipalityId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
  })
  .strict();

export const RegionScalarWhereInputObjectSchema = Schema;
