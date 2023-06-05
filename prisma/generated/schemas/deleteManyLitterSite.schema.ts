import * as Yup from 'yup'
import { LitterSiteWhereInputObjectSchema } from './internals'

export const LitterSiteDeleteManySchema = Yup.object({
  LitterSiteWhereInputObjectSchema,
}).required()
