// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { StringWithAggregatesFilterObjectSchema } from '../internals'
import { IntWithAggregatesFilterObjectSchema } from '../internals'
import { DateTimeWithAggregatesFilterObjectSchema } from '../internals'

export const RewardScalarWhereWithAggregatesInputObjectSchema = Yup.object({
  AND: Yup.mixed().oneOfSchemas([
    Yup.lazy(() =>
      RewardScalarWhereWithAggregatesInputObjectSchema.default(undefined)
    ),
    Yup.array().of(
      Yup.lazy(() =>
        RewardScalarWhereWithAggregatesInputObjectSchema.default(undefined)
      )
    ),
  ]),
  OR: Yup.array().of(
    Yup.lazy(() =>
      RewardScalarWhereWithAggregatesInputObjectSchema.default(undefined)
    )
  ),
  NOT: Yup.mixed().oneOfSchemas([
    Yup.lazy(() =>
      RewardScalarWhereWithAggregatesInputObjectSchema.default(undefined)
    ),
    Yup.array().of(
      Yup.lazy(() =>
        RewardScalarWhereWithAggregatesInputObjectSchema.default(undefined)
      )
    ),
  ]),
  rewardId: Yup.mixed().oneOfSchemas([
    StringWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  name: Yup.mixed().oneOfSchemas([
    StringWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  cost: Yup.mixed().oneOfSchemas([
    IntWithAggregatesFilterObjectSchema,
    Yup.number(),
  ]),
  description: Yup.mixed().oneOfSchemas([
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
