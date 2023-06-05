import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { MunicipalityRelationFilterObjectSchema } from './MunicipalityRelationFilter.schema';
import { MunicipalityWhereInputObjectSchema } from './MunicipalityWhereInput.schema';
import { RegionPointListRelationFilterObjectSchema } from './RegionPointListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RegionWhereInputObjectSchema),
        z.lazy(() => RegionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RegionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RegionWhereInputObjectSchema),
        z.lazy(() => RegionWhereInputObjectSchema).array(),
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
    municipality: z
      .union([
        z.lazy(() => MunicipalityRelationFilterObjectSchema),
        z.lazy(() => MunicipalityWhereInputObjectSchema),
      ])
      .optional(),
    points: z.lazy(() => RegionPointListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const RegionWhereInputObjectSchema = Schema;
