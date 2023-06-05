import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { MunicipalityRelationFilterObjectSchema } from './MunicipalityRelationFilter.schema';
import { MunicipalityWhereInputObjectSchema } from './MunicipalityWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DisposalSiteWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DisposalSiteWhereInputObjectSchema),
        z.lazy(() => DisposalSiteWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DisposalSiteWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DisposalSiteWhereInputObjectSchema),
        z.lazy(() => DisposalSiteWhereInputObjectSchema).array(),
      ])
      .optional(),
    disposalSiteId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    municipalityId: z
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
    municipality: z
      .union([
        z.lazy(() => MunicipalityRelationFilterObjectSchema),
        z.lazy(() => MunicipalityWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const DisposalSiteWhereInputObjectSchema = Schema;
