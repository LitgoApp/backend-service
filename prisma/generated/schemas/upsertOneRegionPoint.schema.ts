import * as Yup from 'yup'
import {
  RegionPointWhereUniqueInputObjectSchema,
  RegionPointCreateInputObjectSchema,
  RegionPointUpdateInputObjectSchema,
} from './internals'

export const RegionPointUpsertSchema = Yup.object({
  where: RegionPointWhereUniqueInputObjectSchema,
  data: RegionPointCreateInputObjectSchema,
  update: RegionPointUpdateInputObjectSchema,
}).required()
