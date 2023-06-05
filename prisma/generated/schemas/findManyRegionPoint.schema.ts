import * as Yup from 'yup'
import {
  RegionPointWhereInputObjectSchema,
  RegionPointOrderByWithRelationInputObjectSchema,
  RegionPointWhereUniqueInputObjectSchema,
} from './internals'
import { RegionPointScalarFieldEnumSchema } from './internals'

export const RegionPointFindManySchema = Yup.object({
  where: RegionPointWhereInputObjectSchema,
  orderBy: RegionPointOrderByWithRelationInputObjectSchema,
  cursor: RegionPointWhereUniqueInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
  distinct: Yup.array().of(RegionPointScalarFieldEnumSchema),
}).required()
