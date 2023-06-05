// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { SortOrderSchema } from '../internals'
import { RegionCountOrderByAggregateInputObjectSchema } from '../internals'
import { RegionMaxOrderByAggregateInputObjectSchema } from '../internals'
import { RegionMinOrderByAggregateInputObjectSchema } from '../internals'

export const RegionOrderByWithAggregationInputObjectSchema = Yup.object({
  regionId: SortOrderSchema,
  municipalityId: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  _count: RegionCountOrderByAggregateInputObjectSchema,
  _max: RegionMaxOrderByAggregateInputObjectSchema,
  _min: RegionMinOrderByAggregateInputObjectSchema,
})
