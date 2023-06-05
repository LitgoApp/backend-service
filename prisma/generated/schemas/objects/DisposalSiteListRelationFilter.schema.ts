// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { DisposalSiteWhereInputObjectSchema } from '../internals'

export const DisposalSiteListRelationFilterObjectSchema = Yup.object({
  every: DisposalSiteWhereInputObjectSchema,
  some: DisposalSiteWhereInputObjectSchema,
  none: DisposalSiteWhereInputObjectSchema,
})
