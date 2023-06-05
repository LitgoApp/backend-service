import * as Yup from 'yup'
import { DisposalSiteWhereInputObjectSchema } from './internals'

export const DisposalSiteDeleteManySchema = Yup.object({
  DisposalSiteWhereInputObjectSchema,
}).required()
