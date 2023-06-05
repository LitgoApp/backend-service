import * as Yup from 'yup'
import { LitterSiteWhereUniqueInputObjectSchema } from './internals'

export const LitterSiteFindUniqueSchema = Yup.object({
  where: LitterSiteWhereUniqueInputObjectSchema,
}).required()
