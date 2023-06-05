// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { SortOrderSchema } from '../internals'
import { RewardCountOrderByAggregateInputObjectSchema } from '../internals'
import { RewardAvgOrderByAggregateInputObjectSchema } from '../internals'
import { RewardMaxOrderByAggregateInputObjectSchema } from '../internals'
import { RewardMinOrderByAggregateInputObjectSchema } from '../internals'
import { RewardSumOrderByAggregateInputObjectSchema } from '../internals'

export const RewardOrderByWithAggregationInputObjectSchema = Yup.object({
  rewardId: SortOrderSchema,
  name: SortOrderSchema,
  cost: SortOrderSchema,
  description: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  _count: RewardCountOrderByAggregateInputObjectSchema,
  _avg: RewardAvgOrderByAggregateInputObjectSchema,
  _max: RewardMaxOrderByAggregateInputObjectSchema,
  _min: RewardMinOrderByAggregateInputObjectSchema,
  _sum: RewardSumOrderByAggregateInputObjectSchema,
})
