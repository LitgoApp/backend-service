import * as Yup from 'yup'
import { RegionWhereInputObjectSchema } from './internals'

export const RegionDeleteManySchema = Yup.object({
  RegionWhereInputObjectSchema,
}).required()
