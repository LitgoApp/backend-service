import * as Yup from 'yup'
import { RewardWhereInputObjectSchema } from './internals'

export const RewardDeleteManySchema = Yup.object({
  RewardWhereInputObjectSchema,
}).required()
