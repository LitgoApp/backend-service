import * as Yup from 'yup'
import {
  MunicipalityUpdateManyMutationInputObjectSchema,
  MunicipalityWhereInputObjectSchema,
} from './internals'

export const MunicipalityUpdateManySchema = Yup.object({
  data: MunicipalityUpdateManyMutationInputObjectSchema,
  where: MunicipalityWhereInputObjectSchema,
}).required()
