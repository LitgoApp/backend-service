import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { BytesFilterObjectSchema } from './BytesFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LitterSiteWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LitterSiteWhereInputObjectSchema),
        z.lazy(() => LitterSiteWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LitterSiteWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LitterSiteWhereInputObjectSchema),
        z.lazy(() => LitterSiteWhereInputObjectSchema).array(),
      ])
      .optional(),
    litterSiteId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    reporterUserId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    collectorUserId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    isCollected: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    image: z
      .union([z.lazy(() => BytesFilterObjectSchema), z.instanceof(Buffer)])
      .optional(),
    harmful: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
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
    reporterUser: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    collectorUser: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const LitterSiteWhereInputObjectSchema = Schema;
