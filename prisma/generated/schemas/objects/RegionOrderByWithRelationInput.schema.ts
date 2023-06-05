// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { SortOrderSchema } from '../internals'
import { MunicipalityOrderByWithRelationInputObjectSchema } from '../internals'
import { RegionPointOrderByRelationAggregateInputObjectSchema } from '../internals'

export const RegionOrderByWithRelationInputObjectSchema = Yup.object({
  regionId: SortOrderSchema,
  municipalityId: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  municipality: MunicipalityOrderByWithRelationInputObjectSchema,
  points: RegionPointOrderByRelationAggregateInputObjectSchema,
})
