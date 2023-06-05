// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { SortOrderSchema } from '../internals'
import { RegionOrderByRelationAggregateInputObjectSchema } from '../internals'
import { DisposalSiteOrderByRelationAggregateInputObjectSchema } from '../internals'

export const MunicipalityOrderByWithRelationInputObjectSchema = Yup.object({
  municipalityId: SortOrderSchema,
  email: SortOrderSchema,
  name: SortOrderSchema,
  password: SortOrderSchema,
  phoneNumber: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  regions: RegionOrderByRelationAggregateInputObjectSchema,
  disposalSites: DisposalSiteOrderByRelationAggregateInputObjectSchema,
})
