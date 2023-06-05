import * as Yup from 'yup'
import { UserWhereUniqueInputObjectSchema } from './internals'

export const UserFindUniqueSchema = Yup.object({
  where: UserWhereUniqueInputObjectSchema,
}).required()
