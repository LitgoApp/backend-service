import * as Yup from 'yup'
import {
  UserUpdateInputObjectSchema,
  UserWhereUniqueInputObjectSchema,
} from './internals'

export const UserUpdateOneSchema = Yup.object({
  data: UserUpdateInputObjectSchema,
  where: UserWhereUniqueInputObjectSchema,
}).required()
