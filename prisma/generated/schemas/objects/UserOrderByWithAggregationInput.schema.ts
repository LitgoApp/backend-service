// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { SortOrderSchema } from '../internals'
import { UserCountOrderByAggregateInputObjectSchema } from '../internals'
import { UserAvgOrderByAggregateInputObjectSchema } from '../internals'
import { UserMaxOrderByAggregateInputObjectSchema } from '../internals'
import { UserMinOrderByAggregateInputObjectSchema } from '../internals'
import { UserSumOrderByAggregateInputObjectSchema } from '../internals'

export const UserOrderByWithAggregationInputObjectSchema = Yup.object({
  userId: SortOrderSchema,
  email: SortOrderSchema,
  name: SortOrderSchema,
  password: SortOrderSchema,
  level: SortOrderSchema,
  points: SortOrderSchema,
  fraudLevel: SortOrderSchema,
  address: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  _count: UserCountOrderByAggregateInputObjectSchema,
  _avg: UserAvgOrderByAggregateInputObjectSchema,
  _max: UserMaxOrderByAggregateInputObjectSchema,
  _min: UserMinOrderByAggregateInputObjectSchema,
  _sum: UserSumOrderByAggregateInputObjectSchema,
})
