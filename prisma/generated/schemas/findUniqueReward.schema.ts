import * as Yup from 'yup'
import { RewardWhereUniqueInputObjectSchema } from './internals'

export const RewardFindUniqueSchema = Yup.object({
  where: RewardWhereUniqueInputObjectSchema,
}).required()
