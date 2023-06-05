import * as Yup from 'yup'
import { LitterSiteWhereUniqueInputObjectSchema } from './internals'

export const LitterSiteDeleteOneSchema = Yup.object({
  where: LitterSiteWhereUniqueInputObjectSchema,
}).required()
