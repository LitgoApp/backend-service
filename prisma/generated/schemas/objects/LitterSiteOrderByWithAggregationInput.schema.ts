// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { SortOrderSchema } from '../internals'
import { LitterSiteCountOrderByAggregateInputObjectSchema } from '../internals'
import { LitterSiteAvgOrderByAggregateInputObjectSchema } from '../internals'
import { LitterSiteMaxOrderByAggregateInputObjectSchema } from '../internals'
import { LitterSiteMinOrderByAggregateInputObjectSchema } from '../internals'
import { LitterSiteSumOrderByAggregateInputObjectSchema } from '../internals'

export const LitterSiteOrderByWithAggregationInputObjectSchema = Yup.object({
  litterSiteId: SortOrderSchema,
  reporterUserId: SortOrderSchema,
  collectorUserId: SortOrderSchema,
  isCollected: SortOrderSchema,
  image: SortOrderSchema,
  harmful: SortOrderSchema,
  latitude: SortOrderSchema,
  longitude: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  _count: LitterSiteCountOrderByAggregateInputObjectSchema,
  _avg: LitterSiteAvgOrderByAggregateInputObjectSchema,
  _max: LitterSiteMaxOrderByAggregateInputObjectSchema,
  _min: LitterSiteMinOrderByAggregateInputObjectSchema,
  _sum: LitterSiteSumOrderByAggregateInputObjectSchema,
})
