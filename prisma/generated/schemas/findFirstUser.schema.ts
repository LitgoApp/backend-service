import * as Yup from 'yup'
import {
  UserWhereInputObjectSchema,
  UserOrderByWithRelationInputObjectSchema,
  UserWhereUniqueInputObjectSchema,
} from './internals'
import { UserScalarFieldEnumSchema } from './internals'

export const UserFindFirstSchema = Yup.object({
  where: UserWhereInputObjectSchema,
  orderBy: UserOrderByWithRelationInputObjectSchema,
  cursor: UserWhereUniqueInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
  distinct: Yup.array().of(UserScalarFieldEnumSchema),
}).required()
