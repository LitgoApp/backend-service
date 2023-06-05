import * as Yup from 'yup'
import { RegionCreateInputObjectSchema } from './internals'

export const RegionCreateSchema = Yup.object({
  data: RegionCreateInputObjectSchema,
}).required()
