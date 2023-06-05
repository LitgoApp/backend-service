// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { RegionWhereInputObjectSchema } from '../internals'

export const RegionListRelationFilterObjectSchema = Yup.object({
  every: RegionWhereInputObjectSchema,
  some: RegionWhereInputObjectSchema,
  none: RegionWhereInputObjectSchema,
})
