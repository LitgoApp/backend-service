import * as Yup from 'yup'
import {
  RewardUpdateInputObjectSchema,
  RewardWhereUniqueInputObjectSchema,
} from './internals'

export const RewardUpdateOneSchema = Yup.object({
  data: RewardUpdateInputObjectSchema,
  where: RewardWhereUniqueInputObjectSchema,
}).required()
