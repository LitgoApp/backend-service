import * as Yup from 'yup'
import {
  MunicipalityWhereInputObjectSchema,
  MunicipalityOrderByWithRelationInputObjectSchema,
  MunicipalityWhereUniqueInputObjectSchema,
} from './internals'

export const MunicipalityAggregateSchema = Yup.object({
  where: MunicipalityWhereInputObjectSchema,
  orderBy: MunicipalityOrderByWithRelationInputObjectSchema,
  cursor: MunicipalityWhereUniqueInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
}).required()
