import * as Yup from 'yup'
import {
  RegionWhereUniqueInputObjectSchema,
  RegionCreateInputObjectSchema,
  RegionUpdateInputObjectSchema,
} from './internals'

export const RegionUpsertSchema = Yup.object({
  where: RegionWhereUniqueInputObjectSchema,
  data: RegionCreateInputObjectSchema,
  update: RegionUpdateInputObjectSchema,
}).required()
