import * as Yup from 'yup'
import { DisposalSiteCreateInputObjectSchema } from './internals'

export const DisposalSiteCreateSchema = Yup.object({
  data: DisposalSiteCreateInputObjectSchema,
}).required()
