// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { LitterSiteWhereInputObjectSchema } from '../internals'

export const LitterSiteListRelationFilterObjectSchema = Yup.object({
  every: LitterSiteWhereInputObjectSchema,
  some: LitterSiteWhereInputObjectSchema,
  none: LitterSiteWhereInputObjectSchema,
})
