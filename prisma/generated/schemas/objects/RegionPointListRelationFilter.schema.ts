// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { RegionPointWhereInputObjectSchema } from '../internals'

export const RegionPointListRelationFilterObjectSchema = Yup.object({
  every: RegionPointWhereInputObjectSchema,
  some: RegionPointWhereInputObjectSchema,
  none: RegionPointWhereInputObjectSchema,
})
