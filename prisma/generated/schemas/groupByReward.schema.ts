import * as Yup from 'yup'
import {
  RewardWhereInputObjectSchema,
  RewardOrderByWithAggregationInputObjectSchema,
  RewardScalarWhereWithAggregatesInputObjectSchema,
} from './internals'
import { RewardScalarFieldEnumSchema } from './internals'

export const RewardGroupBySchema = Yup.object({
  where: RewardWhereInputObjectSchema,
  orderBy: RewardOrderByWithAggregationInputObjectSchema,
  having: RewardScalarWhereWithAggregatesInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
  by: Yup.array().of(RewardScalarFieldEnumSchema).required(),
}).required()
