import * as Yup from 'yup'
import { RegionPointWhereInputObjectSchema } from './internals'

export const RegionPointDeleteManySchema = Yup.object({
  RegionPointWhereInputObjectSchema,
}).required()
