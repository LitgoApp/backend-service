// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { StringFilterObjectSchema } from '../internals'
import { FloatFilterObjectSchema } from '../internals'
import { DateTimeFilterObjectSchema } from '../internals'

export const RegionPointScalarWhereInputObjectSchema = Yup.object({
  AND: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => RegionPointScalarWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() => RegionPointScalarWhereInputObjectSchema.default(undefined))
    ),
  ]),
  OR: Yup.array().of(
    Yup.lazy(() => RegionPointScalarWhereInputObjectSchema.default(undefined))
  ),
  NOT: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => RegionPointScalarWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() => RegionPointScalarWhereInputObjectSchema.default(undefined))
    ),
  ]),
  regionPointId: Yup.mixed().oneOfSchemas([
    StringFilterObjectSchema,
    Yup.string(),
  ]),
  regionId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema, Yup.string()]),
  latitude: Yup.mixed().oneOfSchemas([FloatFilterObjectSchema, Yup.number()]),
  longitude: Yup.mixed().oneOfSchemas([FloatFilterObjectSchema, Yup.number()]),
  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),
  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),
})
