// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { SortOrderSchema } from '../internals'
import { RegionOrderByWithRelationInputObjectSchema } from '../internals'

export const RegionPointOrderByWithRelationInputObjectSchema = Yup.object({
  regionPointId: SortOrderSchema,
  regionId: SortOrderSchema,
  latitude: SortOrderSchema,
  longitude: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  region: RegionOrderByWithRelationInputObjectSchema,
})
