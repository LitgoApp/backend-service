// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { SortOrderSchema } from '../internals'

export const MunicipalityMinOrderByAggregateInputObjectSchema = Yup.object({
  municipalityId: SortOrderSchema,
  email: SortOrderSchema,
  name: SortOrderSchema,
  password: SortOrderSchema,
  phoneNumber: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
})
