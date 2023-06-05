// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { SortOrderSchema } from '../internals'
import { LitterSiteOrderByRelationAggregateInputObjectSchema } from '../internals'

export const UserOrderByWithRelationInputObjectSchema = Yup.object({
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
  reportedLitter: LitterSiteOrderByRelationAggregateInputObjectSchema,
  collectedLitter: LitterSiteOrderByRelationAggregateInputObjectSchema,
})
