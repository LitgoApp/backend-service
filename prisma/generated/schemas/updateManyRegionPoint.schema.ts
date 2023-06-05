import * as Yup from 'yup'
import {
  RegionPointUpdateManyMutationInputObjectSchema,
  RegionPointWhereInputObjectSchema,
} from './internals'

export const RegionPointUpdateManySchema = Yup.object({
  data: RegionPointUpdateManyMutationInputObjectSchema,
  where: RegionPointWhereInputObjectSchema,
}).required()
