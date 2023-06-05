import * as Yup from 'yup'
import {
  RegionPointWhereInputObjectSchema,
  RegionPointOrderByWithAggregationInputObjectSchema,
  RegionPointScalarWhereWithAggregatesInputObjectSchema,
} from './internals'
import { RegionPointScalarFieldEnumSchema } from './internals'

export const RegionPointGroupBySchema = Yup.object({
  where: RegionPointWhereInputObjectSchema,
  orderBy: RegionPointOrderByWithAggregationInputObjectSchema,
  having: RegionPointScalarWhereWithAggregatesInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
  by: Yup.array().of(RegionPointScalarFieldEnumSchema).required(),
}).required()
