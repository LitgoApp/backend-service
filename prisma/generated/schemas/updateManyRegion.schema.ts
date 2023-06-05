import * as Yup from 'yup'
import {
  RegionUpdateManyMutationInputObjectSchema,
  RegionWhereInputObjectSchema,
} from './internals'

export const RegionUpdateManySchema = Yup.object({
  data: RegionUpdateManyMutationInputObjectSchema,
  where: RegionWhereInputObjectSchema,
}).required()
