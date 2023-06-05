import * as Yup from 'yup'
import { RewardWhereUniqueInputObjectSchema } from './internals'

export const RewardDeleteOneSchema = Yup.object({
  where: RewardWhereUniqueInputObjectSchema,
}).required()
