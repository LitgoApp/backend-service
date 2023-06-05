import * as Yup from 'yup'
import {
  RegionUpdateInputObjectSchema,
  RegionWhereUniqueInputObjectSchema,
} from './internals'

export const RegionUpdateOneSchema = Yup.object({
  data: RegionUpdateInputObjectSchema,
  where: RegionWhereUniqueInputObjectSchema,
}).required()
