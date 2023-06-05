import * as Yup from 'yup'
import { UserWhereUniqueInputObjectSchema } from './internals'

export const UserDeleteOneSchema = Yup.object({
  where: UserWhereUniqueInputObjectSchema,
}).required()
