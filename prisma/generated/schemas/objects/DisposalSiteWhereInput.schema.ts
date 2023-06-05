// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { StringFilterObjectSchema } from '../internals'
import { FloatFilterObjectSchema } from '../internals'
import { DateTimeFilterObjectSchema } from '../internals'
import { MunicipalityRelationFilterObjectSchema } from '../internals'
import { MunicipalityWhereInputObjectSchema } from '../internals'

export const DisposalSiteWhereInputObjectSchema = Yup.object({
  AND: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => DisposalSiteWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() => DisposalSiteWhereInputObjectSchema.default(undefined))
    ),
  ]),
  OR: Yup.array().of(
    Yup.lazy(() => DisposalSiteWhereInputObjectSchema.default(undefined))
  ),
  NOT: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => DisposalSiteWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() => DisposalSiteWhereInputObjectSchema.default(undefined))
    ),
  ]),
  disposalSiteId: Yup.mixed().oneOfSchemas([
    StringFilterObjectSchema,
    Yup.string(),
  ]),
  municipalityId: Yup.mixed().oneOfSchemas([
    StringFilterObjectSchema,
    Yup.string(),
  ]),
  latitude: Yup.mixed().oneOfSchemas([FloatFilterObjectSchema, Yup.number()]),
  longitude: Yup.mixed().oneOfSchemas([FloatFilterObjectSchema, Yup.number()]),
  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),
  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),
  municipality: Yup.mixed().oneOfSchemas([
    MunicipalityRelationFilterObjectSchema,
    MunicipalityWhereInputObjectSchema,
  ]),
})
