// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { SortOrderSchema } from '../internals'

export const RewardMaxOrderByAggregateInputObjectSchema = Yup.object({
  rewardId: SortOrderSchema,
  name: SortOrderSchema,
  cost: SortOrderSchema,
  description: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
})
