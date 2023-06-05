import * as Yup from 'yup'
import {
  RegionWhereInputObjectSchema,
  RegionOrderByWithRelationInputObjectSchema,
  RegionWhereUniqueInputObjectSchema,
} from './internals'
import { RegionScalarFieldEnumSchema } from './internals'

export const RegionFindManySchema = Yup.object({
  where: RegionWhereInputObjectSchema,
  orderBy: RegionOrderByWithRelationInputObjectSchema,
  cursor: RegionWhereUniqueInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
  distinct: Yup.array().of(RegionScalarFieldEnumSchema),
}).required()
