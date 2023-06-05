// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { StringWithAggregatesFilterObjectSchema } from '../internals'
import { DateTimeWithAggregatesFilterObjectSchema } from '../internals'

export const RegionScalarWhereWithAggregatesInputObjectSchema = Yup.object({
  AND: Yup.mixed().oneOfSchemas([
    Yup.lazy(() =>
      RegionScalarWhereWithAggregatesInputObjectSchema.default(undefined)
    ),
    Yup.array().of(
      Yup.lazy(() =>
        RegionScalarWhereWithAggregatesInputObjectSchema.default(undefined)
      )
    ),
  ]),
  OR: Yup.array().of(
    Yup.lazy(() =>
      RegionScalarWhereWithAggregatesInputObjectSchema.default(undefined)
    )
  ),
  NOT: Yup.mixed().oneOfSchemas([
    Yup.lazy(() =>
      RegionScalarWhereWithAggregatesInputObjectSchema.default(undefined)
    ),
    Yup.array().of(
      Yup.lazy(() =>
        RegionScalarWhereWithAggregatesInputObjectSchema.default(undefined)
      )
    ),
  ]),
  regionId: Yup.mixed().oneOfSchemas([
    StringWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  municipalityId: Yup.mixed().oneOfSchemas([
    StringWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  createdAt: Yup.mixed().oneOfSchemas([
    DateTimeWithAggregatesFilterObjectSchema,
  ]),
  updatedAt: Yup.mixed().oneOfSchemas([
    DateTimeWithAggregatesFilterObjectSchema,
  ]),
})
