// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { StringWithAggregatesFilterObjectSchema } from '../internals'
import { StringNullableWithAggregatesFilterObjectSchema } from '../internals'
import { BoolWithAggregatesFilterObjectSchema } from '../internals'
import { BytesWithAggregatesFilterObjectSchema } from '../internals'
import { FloatWithAggregatesFilterObjectSchema } from '../internals'
import { DateTimeWithAggregatesFilterObjectSchema } from '../internals'

export const LitterSiteScalarWhereWithAggregatesInputObjectSchema = Yup.object({
  AND: Yup.mixed().oneOfSchemas([
    Yup.lazy(() =>
      LitterSiteScalarWhereWithAggregatesInputObjectSchema.default(undefined)
    ),
    Yup.array().of(
      Yup.lazy(() =>
        LitterSiteScalarWhereWithAggregatesInputObjectSchema.default(undefined)
      )
    ),
  ]),
  OR: Yup.array().of(
    Yup.lazy(() =>
      LitterSiteScalarWhereWithAggregatesInputObjectSchema.default(undefined)
    )
  ),
  NOT: Yup.mixed().oneOfSchemas([
    Yup.lazy(() =>
      LitterSiteScalarWhereWithAggregatesInputObjectSchema.default(undefined)
    ),
    Yup.array().of(
      Yup.lazy(() =>
        LitterSiteScalarWhereWithAggregatesInputObjectSchema.default(undefined)
      )
    ),
  ]),
  litterSiteId: Yup.mixed().oneOfSchemas([
    StringWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  reporterUserId: Yup.mixed().oneOfSchemas([
    StringWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  collectorUserId: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  isCollected: Yup.mixed().oneOfSchemas([
    BoolWithAggregatesFilterObjectSchema,
    Yup.boolean(),
  ]),
  image: Yup.mixed().oneOfSchemas([BytesWithAggregatesFilterObjectSchema]),
  harmful: Yup.mixed().oneOfSchemas([
    BoolWithAggregatesFilterObjectSchema,
    Yup.boolean(),
  ]),
  latitude: Yup.mixed().oneOfSchemas([
    FloatWithAggregatesFilterObjectSchema,
    Yup.number(),
  ]),
  longitude: Yup.mixed().oneOfSchemas([
    FloatWithAggregatesFilterObjectSchema,
    Yup.number(),
  ]),
  createdAt: Yup.mixed().oneOfSchemas([
    DateTimeWithAggregatesFilterObjectSchema,
  ]),
  updatedAt: Yup.mixed().oneOfSchemas([
    DateTimeWithAggregatesFilterObjectSchema,
  ]),
})
