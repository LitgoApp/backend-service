import * as Yup from 'yup'
import {
  LitterSiteUpdateManyMutationInputObjectSchema,
  LitterSiteWhereInputObjectSchema,
} from './internals'

export const LitterSiteUpdateManySchema = Yup.object({
  data: LitterSiteUpdateManyMutationInputObjectSchema,
  where: LitterSiteWhereInputObjectSchema,
}).required()
