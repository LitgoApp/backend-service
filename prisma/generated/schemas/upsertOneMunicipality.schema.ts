import * as Yup from 'yup'
import {
  MunicipalityWhereUniqueInputObjectSchema,
  MunicipalityCreateInputObjectSchema,
  MunicipalityUpdateInputObjectSchema,
} from './internals'

export const MunicipalityUpsertSchema = Yup.object({
  where: MunicipalityWhereUniqueInputObjectSchema,
  data: MunicipalityCreateInputObjectSchema,
  update: MunicipalityUpdateInputObjectSchema,
}).required()
