import * as Yup from 'yup'
import { RewardCreateInputObjectSchema } from './internals'

export const RewardCreateSchema = Yup.object({
  data: RewardCreateInputObjectSchema,
}).required()
