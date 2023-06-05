import * as Yup from 'yup'
import {
  DisposalSiteWhereUniqueInputObjectSchema,
  DisposalSiteCreateInputObjectSchema,
  DisposalSiteUpdateInputObjectSchema,
} from './internals'

export const DisposalSiteUpsertSchema = Yup.object({
  where: DisposalSiteWhereUniqueInputObjectSchema,
  data: DisposalSiteCreateInputObjectSchema,
  update: DisposalSiteUpdateInputObjectSchema,
}).required()
