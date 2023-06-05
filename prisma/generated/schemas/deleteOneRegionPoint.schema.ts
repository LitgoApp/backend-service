import * as Yup from 'yup'
import { RegionPointWhereUniqueInputObjectSchema } from './internals'

export const RegionPointDeleteOneSchema = Yup.object({
  where: RegionPointWhereUniqueInputObjectSchema,
}).required()
