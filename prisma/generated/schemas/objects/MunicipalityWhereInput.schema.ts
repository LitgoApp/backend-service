import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { RegionListRelationFilterObjectSchema } from './RegionListRelationFilter.schema';
import { DisposalSiteListRelationFilterObjectSchema } from './DisposalSiteListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MunicipalityWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MunicipalityWhereInputObjectSchema),
        z.lazy(() => MunicipalityWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MunicipalityWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MunicipalityWhereInputObjectSchema),
        z.lazy(() => MunicipalityWhereInputObjectSchema).array(),
      ])
      .optional(),
    municipalityId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    password: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    phoneNumber: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    regions: z.lazy(() => RegionListRelationFilterObjectSchema).optional(),
    disposalSites: z
      .lazy(() => DisposalSiteListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const MunicipalityWhereInputObjectSchema = Schema;
