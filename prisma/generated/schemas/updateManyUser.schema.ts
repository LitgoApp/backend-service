import * as Yup from 'yup'
import {
  UserUpdateManyMutationInputObjectSchema,
  UserWhereInputObjectSchema,
} from './internals'

export const UserUpdateManySchema = Yup.object({
  data: UserUpdateManyMutationInputObjectSchema,
  where: UserWhereInputObjectSchema,
}).required()
