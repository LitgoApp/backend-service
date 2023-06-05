import * as Yup from 'yup'
import {
  MunicipalityWhereInputObjectSchema,
  MunicipalityOrderByWithAggregationInputObjectSchema,
  MunicipalityScalarWhereWithAggregatesInputObjectSchema,
} from './internals'
import { MunicipalityScalarFieldEnumSchema } from './internals'

export const MunicipalityGroupBySchema = Yup.object({
  where: MunicipalityWhereInputObjectSchema,
  orderBy: MunicipalityOrderByWithAggregationInputObjectSchema,
  having: MunicipalityScalarWhereWithAggregatesInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
  by: Yup.array().of(MunicipalityScalarFieldEnumSchema).required(),
}).required()
