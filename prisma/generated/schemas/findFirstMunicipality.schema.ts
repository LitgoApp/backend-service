import * as Yup from 'yup'
import {
  MunicipalityWhereInputObjectSchema,
  MunicipalityOrderByWithRelationInputObjectSchema,
  MunicipalityWhereUniqueInputObjectSchema,
} from './internals'
import { MunicipalityScalarFieldEnumSchema } from './internals'

export const MunicipalityFindFirstSchema = Yup.object({
  where: MunicipalityWhereInputObjectSchema,
  orderBy: MunicipalityOrderByWithRelationInputObjectSchema,
  cursor: MunicipalityWhereUniqueInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
  distinct: Yup.array().of(MunicipalityScalarFieldEnumSchema),
}).required()
