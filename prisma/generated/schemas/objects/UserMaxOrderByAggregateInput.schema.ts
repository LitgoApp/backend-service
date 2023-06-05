// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { SortOrderSchema } from '../internals'

export const UserMaxOrderByAggregateInputObjectSchema = Yup.object({
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
})
