import * as Yup from 'yup'
import {
  LitterSiteUpdateInputObjectSchema,
  LitterSiteWhereUniqueInputObjectSchema,
} from './internals'

export const LitterSiteUpdateOneSchema = Yup.object({
  data: LitterSiteUpdateInputObjectSchema,
  where: LitterSiteWhereUniqueInputObjectSchema,
}).required()
