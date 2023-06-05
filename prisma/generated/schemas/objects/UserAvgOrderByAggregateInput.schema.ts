// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { SortOrderSchema } from '../internals'

export const UserAvgOrderByAggregateInputObjectSchema = Yup.object({
  level: SortOrderSchema,
  points: SortOrderSchema,
  fraudLevel: SortOrderSchema,
})
