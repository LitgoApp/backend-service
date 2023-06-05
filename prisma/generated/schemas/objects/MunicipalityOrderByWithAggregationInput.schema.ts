// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { SortOrderSchema } from '../internals'
import { MunicipalityCountOrderByAggregateInputObjectSchema } from '../internals'
import { MunicipalityMaxOrderByAggregateInputObjectSchema } from '../internals'
import { MunicipalityMinOrderByAggregateInputObjectSchema } from '../internals'

export const MunicipalityOrderByWithAggregationInputObjectSchema = Yup.object({
  municipalityId: SortOrderSchema,
  email: SortOrderSchema,
  name: SortOrderSchema,
  password: SortOrderSchema,
  phoneNumber: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  _count: MunicipalityCountOrderByAggregateInputObjectSchema,
  _max: MunicipalityMaxOrderByAggregateInputObjectSchema,
  _min: MunicipalityMinOrderByAggregateInputObjectSchema,
})
