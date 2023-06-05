import * as Yup from 'yup'
import {
  RegionWhereInputObjectSchema,
  RegionOrderByWithRelationInputObjectSchema,
  RegionWhereUniqueInputObjectSchema,
} from './internals'

export const RegionAggregateSchema = Yup.object({
  where: RegionWhereInputObjectSchema,
  orderBy: RegionOrderByWithRelationInputObjectSchema,
  cursor: RegionWhereUniqueInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
}).required()
