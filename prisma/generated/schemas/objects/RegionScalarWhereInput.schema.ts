// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { StringFilterObjectSchema } from '../internals'
import { DateTimeFilterObjectSchema } from '../internals'

export const RegionScalarWhereInputObjectSchema = Yup.object({
  AND: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => RegionScalarWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() => RegionScalarWhereInputObjectSchema.default(undefined))
    ),
  ]),
  OR: Yup.array().of(
    Yup.lazy(() => RegionScalarWhereInputObjectSchema.default(undefined))
  ),
  NOT: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => RegionScalarWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() => RegionScalarWhereInputObjectSchema.default(undefined))
    ),
  ]),
  regionId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema, Yup.string()]),
  municipalityId: Yup.mixed().oneOfSchemas([
    StringFilterObjectSchema,
    Yup.string(),
  ]),
  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),
  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),
})
