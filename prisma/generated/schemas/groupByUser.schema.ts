import * as Yup from 'yup'
import {
  UserWhereInputObjectSchema,
  UserOrderByWithAggregationInputObjectSchema,
  UserScalarWhereWithAggregatesInputObjectSchema,
} from './internals'
import { UserScalarFieldEnumSchema } from './internals'

export const UserGroupBySchema = Yup.object({
  where: UserWhereInputObjectSchema,
  orderBy: UserOrderByWithAggregationInputObjectSchema,
  having: UserScalarWhereWithAggregatesInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
  by: Yup.array().of(UserScalarFieldEnumSchema).required(),
}).required()
