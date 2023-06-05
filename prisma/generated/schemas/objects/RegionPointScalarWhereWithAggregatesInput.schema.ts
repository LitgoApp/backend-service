// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { StringWithAggregatesFilterObjectSchema } from '../internals'
import { FloatWithAggregatesFilterObjectSchema } from '../internals'
import { DateTimeWithAggregatesFilterObjectSchema } from '../internals'

export const RegionPointScalarWhereWithAggregatesInputObjectSchema = Yup.object(
  {
    AND: Yup.mixed().oneOfSchemas([
      Yup.lazy(() =>
        RegionPointScalarWhereWithAggregatesInputObjectSchema.default(undefined)
      ),
      Yup.array().of(
        Yup.lazy(() =>
          RegionPointScalarWhereWithAggregatesInputObjectSchema.default(
            undefined
          )
        )
      ),
    ]),
    OR: Yup.array().of(
      Yup.lazy(() =>
        RegionPointScalarWhereWithAggregatesInputObjectSchema.default(undefined)
      )
    ),
    NOT: Yup.mixed().oneOfSchemas([
      Yup.lazy(() =>
        RegionPointScalarWhereWithAggregatesInputObjectSchema.default(undefined)
      ),
      Yup.array().of(
        Yup.lazy(() =>
          RegionPointScalarWhereWithAggregatesInputObjectSchema.default(
            undefined
          )
        )
      ),
    ]),
    regionPointId: Yup.mixed().oneOfSchemas([
      StringWithAggregatesFilterObjectSchema,
      Yup.string(),
    ]),
    regionId: Yup.mixed().oneOfSchemas([
      StringWithAggregatesFilterObjectSchema,
      Yup.string(),
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
  }
)
