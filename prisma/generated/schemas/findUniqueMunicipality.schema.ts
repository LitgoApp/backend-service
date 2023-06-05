import * as Yup from 'yup'
import { MunicipalityWhereUniqueInputObjectSchema } from './internals'

export const MunicipalityFindUniqueSchema = Yup.object({
  where: MunicipalityWhereUniqueInputObjectSchema,
}).required()
