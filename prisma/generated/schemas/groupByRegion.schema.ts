import * as Yup from 'yup'
import {
  RegionWhereInputObjectSchema,
  RegionOrderByWithAggregationInputObjectSchema,
  RegionScalarWhereWithAggregatesInputObjectSchema,
} from './internals'
import { RegionScalarFieldEnumSchema } from './internals'

export const RegionGroupBySchema = Yup.object({
  where: RegionWhereInputObjectSchema,
  orderBy: RegionOrderByWithAggregationInputObjectSchema,
  having: RegionScalarWhereWithAggregatesInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
  by: Yup.array().of(RegionScalarFieldEnumSchema).required(),
}).required()
