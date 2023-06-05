import * as Yup from 'yup'
import {
  RewardUpdateManyMutationInputObjectSchema,
  RewardWhereInputObjectSchema,
} from './internals'

export const RewardUpdateManySchema = Yup.object({
  data: RewardUpdateManyMutationInputObjectSchema,
  where: RewardWhereInputObjectSchema,
}).required()
