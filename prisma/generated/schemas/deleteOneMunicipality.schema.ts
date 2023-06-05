import * as Yup from 'yup'
import { MunicipalityWhereUniqueInputObjectSchema } from './internals'

export const MunicipalityDeleteOneSchema = Yup.object({
  where: MunicipalityWhereUniqueInputObjectSchema,
}).required()
