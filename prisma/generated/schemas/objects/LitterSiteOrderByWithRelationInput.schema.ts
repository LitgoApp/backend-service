// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { SortOrderSchema } from '../internals'
import { UserOrderByWithRelationInputObjectSchema } from '../internals'

export const LitterSiteOrderByWithRelationInputObjectSchema = Yup.object({
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
  reporterUser: UserOrderByWithRelationInputObjectSchema,
  collectorUser: UserOrderByWithRelationInputObjectSchema,
})
