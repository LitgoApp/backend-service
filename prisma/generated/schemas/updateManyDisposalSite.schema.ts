import * as Yup from 'yup'
import {
  DisposalSiteUpdateManyMutationInputObjectSchema,
  DisposalSiteWhereInputObjectSchema,
} from './internals'

export const DisposalSiteUpdateManySchema = Yup.object({
  data: DisposalSiteUpdateManyMutationInputObjectSchema,
  where: DisposalSiteWhereInputObjectSchema,
}).required()
