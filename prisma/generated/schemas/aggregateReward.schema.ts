import * as Yup from 'yup'
import {
  RewardWhereInputObjectSchema,
  RewardOrderByWithRelationInputObjectSchema,
  RewardWhereUniqueInputObjectSchema,
} from './internals'

export const RewardAggregateSchema = Yup.object({
  where: RewardWhereInputObjectSchema,
  orderBy: RewardOrderByWithRelationInputObjectSchema,
  cursor: RewardWhereUniqueInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
}).required()
