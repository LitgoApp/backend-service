// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { StringFilterObjectSchema } from '../internals'
import { DateTimeFilterObjectSchema } from '../internals'
import { MunicipalityRelationFilterObjectSchema } from '../internals'
import { MunicipalityWhereInputObjectSchema } from '../internals'
import { RegionPointListRelationFilterObjectSchema } from '../internals'

export const RegionWhereInputObjectSchema = Yup.object({
  AND: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => RegionWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() => RegionWhereInputObjectSchema.default(undefined))
    ),
  ]),
  OR: Yup.array().of(
    Yup.lazy(() => RegionWhereInputObjectSchema.default(undefined))
  ),
  NOT: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => RegionWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() => RegionWhereInputObjectSchema.default(undefined))
    ),
  ]),
  regionId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema, Yup.string()]),
  municipalityId: Yup.mixed().oneOfSchemas([
    StringFilterObjectSchema,
    Yup.string(),
  ]),
  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),
  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),
  municipality: Yup.mixed().oneOfSchemas([
    MunicipalityRelationFilterObjectSchema,
    MunicipalityWhereInputObjectSchema,
  ]),
  points: RegionPointListRelationFilterObjectSchema,
})
