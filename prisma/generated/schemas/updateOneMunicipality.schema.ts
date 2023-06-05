import * as Yup from 'yup'
import {
  MunicipalityUpdateInputObjectSchema,
  MunicipalityWhereUniqueInputObjectSchema,
} from './internals'

export const MunicipalityUpdateOneSchema = Yup.object({
  data: MunicipalityUpdateInputObjectSchema,
  where: MunicipalityWhereUniqueInputObjectSchema,
}).required()
