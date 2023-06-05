import * as Yup from 'yup'
import { RegionPointCreateInputObjectSchema } from './internals'

export const RegionPointCreateSchema = Yup.object({
  data: RegionPointCreateInputObjectSchema,
}).required()
