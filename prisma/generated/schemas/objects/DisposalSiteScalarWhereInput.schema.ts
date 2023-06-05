// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { StringFilterObjectSchema } from '../internals'
import { FloatFilterObjectSchema } from '../internals'
import { DateTimeFilterObjectSchema } from '../internals'

export const DisposalSiteScalarWhereInputObjectSchema = Yup.object({
  AND: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => DisposalSiteScalarWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() =>
        DisposalSiteScalarWhereInputObjectSchema.default(undefined)
      )
    ),
  ]),
  OR: Yup.array().of(
    Yup.lazy(() => DisposalSiteScalarWhereInputObjectSchema.default(undefined))
  ),
  NOT: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => DisposalSiteScalarWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() =>
        DisposalSiteScalarWhereInputObjectSchema.default(undefined)
      )
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
})
