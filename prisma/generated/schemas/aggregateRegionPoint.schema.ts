import * as Yup from 'yup'
import {
  RegionPointWhereInputObjectSchema,
  RegionPointOrderByWithRelationInputObjectSchema,
  RegionPointWhereUniqueInputObjectSchema,
} from './internals'

export const RegionPointAggregateSchema = Yup.object({
  where: RegionPointWhereInputObjectSchema,
  orderBy: RegionPointOrderByWithRelationInputObjectSchema,
  cursor: RegionPointWhereUniqueInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
}).required()
