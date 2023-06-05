// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { MunicipalityWhereInputObjectSchema } from '../internals'

export const MunicipalityRelationFilterObjectSchema = Yup.object({
  is: MunicipalityWhereInputObjectSchema,
  isNot: MunicipalityWhereInputObjectSchema,
})
