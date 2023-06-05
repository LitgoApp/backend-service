// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { RegionWhereInputObjectSchema } from '../internals'

export const RegionRelationFilterObjectSchema = Yup.object({
  is: RegionWhereInputObjectSchema,
  isNot: RegionWhereInputObjectSchema,
})
