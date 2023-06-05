// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { SortOrderSchema } from '../internals'
import { DisposalSiteCountOrderByAggregateInputObjectSchema } from '../internals'
import { DisposalSiteAvgOrderByAggregateInputObjectSchema } from '../internals'
import { DisposalSiteMaxOrderByAggregateInputObjectSchema } from '../internals'
import { DisposalSiteMinOrderByAggregateInputObjectSchema } from '../internals'
import { DisposalSiteSumOrderByAggregateInputObjectSchema } from '../internals'

export const DisposalSiteOrderByWithAggregationInputObjectSchema = Yup.object({
  disposalSiteId: SortOrderSchema,
  municipalityId: SortOrderSchema,
  latitude: SortOrderSchema,
  longitude: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  _count: DisposalSiteCountOrderByAggregateInputObjectSchema,
  _avg: DisposalSiteAvgOrderByAggregateInputObjectSchema,
  _max: DisposalSiteMaxOrderByAggregateInputObjectSchema,
  _min: DisposalSiteMinOrderByAggregateInputObjectSchema,
  _sum: DisposalSiteSumOrderByAggregateInputObjectSchema,
})
