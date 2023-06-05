// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { StringFilterObjectSchema } from '../internals'
import { StringNullableFilterObjectSchema } from '../internals'
import { BoolFilterObjectSchema } from '../internals'
import { BytesFilterObjectSchema } from '../internals'
import { FloatFilterObjectSchema } from '../internals'
import { DateTimeFilterObjectSchema } from '../internals'
import { UserRelationFilterObjectSchema } from '../internals'
import { UserWhereInputObjectSchema } from '../internals'

export const LitterSiteWhereInputObjectSchema = Yup.object({
  AND: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => LitterSiteWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() => LitterSiteWhereInputObjectSchema.default(undefined))
    ),
  ]),
  OR: Yup.array().of(
    Yup.lazy(() => LitterSiteWhereInputObjectSchema.default(undefined))
  ),
  NOT: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => LitterSiteWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() => LitterSiteWhereInputObjectSchema.default(undefined))
    ),
  ]),
  litterSiteId: Yup.mixed().oneOfSchemas([
    StringFilterObjectSchema,
    Yup.string(),
  ]),
  reporterUserId: Yup.mixed().oneOfSchemas([
    StringFilterObjectSchema,
    Yup.string(),
  ]),
  collectorUserId: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  isCollected: Yup.mixed().oneOfSchemas([
    BoolFilterObjectSchema,
    Yup.boolean(),
  ]),
  image: Yup.mixed().oneOfSchemas([BytesFilterObjectSchema]),
  harmful: Yup.mixed().oneOfSchemas([BoolFilterObjectSchema, Yup.boolean()]),
  latitude: Yup.mixed().oneOfSchemas([FloatFilterObjectSchema, Yup.number()]),
  longitude: Yup.mixed().oneOfSchemas([FloatFilterObjectSchema, Yup.number()]),
  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),
  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),
  reporterUser: Yup.mixed().oneOfSchemas([
    UserRelationFilterObjectSchema,
    UserWhereInputObjectSchema,
  ]),
  collectorUser: Yup.mixed().oneOfSchemas([
    UserRelationFilterObjectSchema,
    UserWhereInputObjectSchema,
  ]),
})
