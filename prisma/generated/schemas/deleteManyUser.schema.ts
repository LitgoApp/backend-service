import * as Yup from 'yup'
import { UserWhereInputObjectSchema } from './internals'

export const UserDeleteManySchema = Yup.object({
  UserWhereInputObjectSchema,
}).required()
