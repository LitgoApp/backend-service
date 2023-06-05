import * as Yup from 'yup'
import {
  RewardWhereInputObjectSchema,
  RewardOrderByWithRelationInputObjectSchema,
  RewardWhereUniqueInputObjectSchema,
} from './internals'
import { RewardScalarFieldEnumSchema } from './internals'

export const RewardFindManySchema = Yup.object({
  where: RewardWhereInputObjectSchema,
  orderBy: RewardOrderByWithRelationInputObjectSchema,
  cursor: RewardWhereUniqueInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
  distinct: Yup.array().of(RewardScalarFieldEnumSchema),
}).required()
