import * as Yup from 'yup'
import { DisposalSiteWhereUniqueInputObjectSchema } from './internals'

export const DisposalSiteFindUniqueSchema = Yup.object({
  where: DisposalSiteWhereUniqueInputObjectSchema,
}).required()
