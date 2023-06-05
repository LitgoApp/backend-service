// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { SortOrderSchema } from '../internals'

export const RegionMaxOrderByAggregateInputObjectSchema = Yup.object({
  regionId: SortOrderSchema,
  municipalityId: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
})
