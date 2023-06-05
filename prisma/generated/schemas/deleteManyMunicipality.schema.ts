import * as Yup from 'yup'
import { MunicipalityWhereInputObjectSchema } from './internals'

export const MunicipalityDeleteManySchema = Yup.object({
  MunicipalityWhereInputObjectSchema,
}).required()
