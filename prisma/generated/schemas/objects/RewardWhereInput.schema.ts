// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { StringFilterObjectSchema } from '../internals'
import { IntFilterObjectSchema } from '../internals'
import { DateTimeFilterObjectSchema } from '../internals'

export const RewardWhereInputObjectSchema = Yup.object({
  AND: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => RewardWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() => RewardWhereInputObjectSchema.default(undefined))
    ),
  ]),
  OR: Yup.array().of(
    Yup.lazy(() => RewardWhereInputObjectSchema.default(undefined))
  ),
  NOT: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => RewardWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() => RewardWhereInputObjectSchema.default(undefined))
    ),
  ]),
  rewardId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema, Yup.string()]),
  name: Yup.mixed().oneOfSchemas([StringFilterObjectSchema, Yup.string()]),
  cost: Yup.mixed().oneOfSchemas([IntFilterObjectSchema, Yup.number()]),
  description: Yup.mixed().oneOfSchemas([
    StringFilterObjectSchema,
    Yup.string(),
  ]),
  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),
  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),
})
