import * as Yup from 'yup'
import { RegionWhereUniqueInputObjectSchema } from './internals'

export const RegionDeleteOneSchema = Yup.object({
  where: RegionWhereUniqueInputObjectSchema,
}).required()
