// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { SortOrderSchema } from '../internals'

export const LitterSiteAvgOrderByAggregateInputObjectSchema = Yup.object({
  latitude: SortOrderSchema,
  longitude: SortOrderSchema,
})
