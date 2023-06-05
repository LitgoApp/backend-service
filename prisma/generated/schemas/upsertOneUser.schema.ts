import * as Yup from 'yup'
import {
  UserWhereUniqueInputObjectSchema,
  UserCreateInputObjectSchema,
  UserUpdateInputObjectSchema,
} from './internals'

export const UserUpsertSchema = Yup.object({
  where: UserWhereUniqueInputObjectSchema,
  data: UserCreateInputObjectSchema,
  update: UserUpdateInputObjectSchema,
}).required()
