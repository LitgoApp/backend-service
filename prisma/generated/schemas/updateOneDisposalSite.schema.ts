import * as Yup from 'yup'
import {
  DisposalSiteUpdateInputObjectSchema,
  DisposalSiteWhereUniqueInputObjectSchema,
} from './internals'

export const DisposalSiteUpdateOneSchema = Yup.object({
  data: DisposalSiteUpdateInputObjectSchema,
  where: DisposalSiteWhereUniqueInputObjectSchema,
}).required()
