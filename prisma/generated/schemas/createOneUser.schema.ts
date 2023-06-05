import * as Yup from 'yup'
import { UserCreateInputObjectSchema } from './internals'

export const UserCreateSchema = Yup.object({
  data: UserCreateInputObjectSchema,
}).required()
