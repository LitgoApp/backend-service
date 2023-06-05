import * as Yup from 'yup'
import { MunicipalityCreateInputObjectSchema } from './internals'

export const MunicipalityCreateSchema = Yup.object({
  data: MunicipalityCreateInputObjectSchema,
}).required()
