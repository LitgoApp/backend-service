// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { SortOrderSchema } from '../internals'
import { RegionPointCountOrderByAggregateInputObjectSchema } from '../internals'
import { RegionPointAvgOrderByAggregateInputObjectSchema } from '../internals'
import { RegionPointMaxOrderByAggregateInputObjectSchema } from '../internals'
import { RegionPointMinOrderByAggregateInputObjectSchema } from '../internals'
import { RegionPointSumOrderByAggregateInputObjectSchema } from '../internals'

export const RegionPointOrderByWithAggregationInputObjectSchema = Yup.object({
  regionPointId: SortOrderSchema,
  regionId: SortOrderSchema,
  latitude: SortOrderSchema,
  longitude: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  _count: RegionPointCountOrderByAggregateInputObjectSchema,
  _avg: RegionPointAvgOrderByAggregateInputObjectSchema,
  _max: RegionPointMaxOrderByAggregateInputObjectSchema,
  _min: RegionPointMinOrderByAggregateInputObjectSchema,
  _sum: RegionPointSumOrderByAggregateInputObjectSchema,
})
