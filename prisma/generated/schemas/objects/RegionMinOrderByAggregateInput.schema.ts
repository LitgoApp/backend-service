// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { SortOrderSchema } from '../internals'

export const RegionMinOrderByAggregateInputObjectSchema = Yup.object({
  regionId: SortOrderSchema,
  municipalityId: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
})
