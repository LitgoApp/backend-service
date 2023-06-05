// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { StringFilterObjectSchema } from '../internals'
import { IntFilterObjectSchema } from '../internals'
import { DateTimeFilterObjectSchema } from '../internals'
import { LitterSiteListRelationFilterObjectSchema } from '../internals'

export const UserWhereInputObjectSchema = Yup.object({
  AND: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => UserWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() => UserWhereInputObjectSchema.default(undefined))
    ),
  ]),
  OR: Yup.array().of(
    Yup.lazy(() => UserWhereInputObjectSchema.default(undefined))
  ),
  NOT: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => UserWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() => UserWhereInputObjectSchema.default(undefined))
    ),
  ]),
  userId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema, Yup.string()]),
  email: Yup.mixed().oneOfSchemas([StringFilterObjectSchema, Yup.string()]),
  name: Yup.mixed().oneOfSchemas([StringFilterObjectSchema, Yup.string()]),
  password: Yup.mixed().oneOfSchemas([StringFilterObjectSchema, Yup.string()]),
  level: Yup.mixed().oneOfSchemas([IntFilterObjectSchema, Yup.number()]),
  points: Yup.mixed().oneOfSchemas([IntFilterObjectSchema, Yup.number()]),
  fraudLevel: Yup.mixed().oneOfSchemas([IntFilterObjectSchema, Yup.number()]),
  address: Yup.mixed().oneOfSchemas([StringFilterObjectSchema, Yup.string()]),
  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),
  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),
  reportedLitter: LitterSiteListRelationFilterObjectSchema,
  collectedLitter: LitterSiteListRelationFilterObjectSchema,
})
