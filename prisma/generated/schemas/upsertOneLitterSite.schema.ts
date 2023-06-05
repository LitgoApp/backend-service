import * as Yup from 'yup'
import {
  LitterSiteWhereUniqueInputObjectSchema,
  LitterSiteCreateInputObjectSchema,
  LitterSiteUpdateInputObjectSchema,
} from './internals'

export const LitterSiteUpsertSchema = Yup.object({
  where: LitterSiteWhereUniqueInputObjectSchema,
  data: LitterSiteCreateInputObjectSchema,
  update: LitterSiteUpdateInputObjectSchema,
}).required()
