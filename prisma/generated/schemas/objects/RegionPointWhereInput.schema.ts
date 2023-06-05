// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { StringFilterObjectSchema } from '../internals'
import { FloatFilterObjectSchema } from '../internals'
import { DateTimeFilterObjectSchema } from '../internals'
import { RegionRelationFilterObjectSchema } from '../internals'
import { RegionWhereInputObjectSchema } from '../internals'

export const RegionPointWhereInputObjectSchema = Yup.object({
  AND: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => RegionPointWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() => RegionPointWhereInputObjectSchema.default(undefined))
    ),
  ]),
  OR: Yup.array().of(
    Yup.lazy(() => RegionPointWhereInputObjectSchema.default(undefined))
  ),
  NOT: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => RegionPointWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() => RegionPointWhereInputObjectSchema.default(undefined))
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
  region: Yup.mixed().oneOfSchemas([
    RegionRelationFilterObjectSchema,
    RegionWhereInputObjectSchema,
  ]),
})
