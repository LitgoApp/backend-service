import * as Yup from 'yup'
import {
  UserWhereInputObjectSchema,
  UserOrderByWithRelationInputObjectSchema,
  UserWhereUniqueInputObjectSchema,
} from './internals'

export const UserAggregateSchema = Yup.object({
  where: UserWhereInputObjectSchema,
  orderBy: UserOrderByWithRelationInputObjectSchema,
  cursor: UserWhereUniqueInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
}).required()
