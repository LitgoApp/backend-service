import * as Yup from 'yup'
import { LitterSiteCreateInputObjectSchema } from './internals'

export const LitterSiteCreateSchema = Yup.object({
  data: LitterSiteCreateInputObjectSchema,
}).required()
