// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { SortOrderSchema } from '../internals'

export const DisposalSiteCountOrderByAggregateInputObjectSchema = Yup.object({
  disposalSiteId: SortOrderSchema,
  municipalityId: SortOrderSchema,
  latitude: SortOrderSchema,
  longitude: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
})
