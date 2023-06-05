import * as Yup from 'yup'
import {
  RewardWhereUniqueInputObjectSchema,
  RewardCreateInputObjectSchema,
  RewardUpdateInputObjectSchema,
} from './internals'

export const RewardUpsertSchema = Yup.object({
  where: RewardWhereUniqueInputObjectSchema,
  data: RewardCreateInputObjectSchema,
  update: RewardUpdateInputObjectSchema,
}).required()
