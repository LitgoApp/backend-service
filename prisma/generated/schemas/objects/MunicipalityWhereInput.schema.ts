// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { StringFilterObjectSchema } from '../internals'
import { DateTimeFilterObjectSchema } from '../internals'
import { RegionListRelationFilterObjectSchema } from '../internals'
import { DisposalSiteListRelationFilterObjectSchema } from '../internals'

export const MunicipalityWhereInputObjectSchema = Yup.object({
  AND: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => MunicipalityWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() => MunicipalityWhereInputObjectSchema.default(undefined))
    ),
  ]),
  OR: Yup.array().of(
    Yup.lazy(() => MunicipalityWhereInputObjectSchema.default(undefined))
  ),
  NOT: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => MunicipalityWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() => MunicipalityWhereInputObjectSchema.default(undefined))
    ),
  ]),
  municipalityId: Yup.mixed().oneOfSchemas([
    StringFilterObjectSchema,
    Yup.string(),
  ]),
  email: Yup.mixed().oneOfSchemas([StringFilterObjectSchema, Yup.string()]),
  name: Yup.mixed().oneOfSchemas([StringFilterObjectSchema, Yup.string()]),
  password: Yup.mixed().oneOfSchemas([StringFilterObjectSchema, Yup.string()]),
  phoneNumber: Yup.mixed().oneOfSchemas([
    StringFilterObjectSchema,
    Yup.string(),
  ]),
  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),
  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),
  regions: RegionListRelationFilterObjectSchema,
  disposalSites: DisposalSiteListRelationFilterObjectSchema,
})
