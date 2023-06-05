import * as Yup from 'yup'
import { DisposalSiteWhereUniqueInputObjectSchema } from './internals'

export const DisposalSiteDeleteOneSchema = Yup.object({
  where: DisposalSiteWhereUniqueInputObjectSchema,
}).required()
