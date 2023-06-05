import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DisposalSiteScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DisposalSiteScalarWhereInputObjectSchema),
        z.lazy(() => DisposalSiteScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DisposalSiteScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DisposalSiteScalarWhereInputObjectSchema),
        z.lazy(() => DisposalSiteScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const DisposalSiteScalarWhereInputObjectSchema = Schema;
