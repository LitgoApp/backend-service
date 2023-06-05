import * as Yup from 'yup'
import {
  RegionPointUpdateInputObjectSchema,
  RegionPointWhereUniqueInputObjectSchema,
} from './internals'

export const RegionPointUpdateOneSchema = Yup.object({
  data: RegionPointUpdateInputObjectSchema,
  where: RegionPointWhereUniqueInputObjectSchema,
}).required()
