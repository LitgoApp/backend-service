import * as Yup from 'yup'
import { RegionPointWhereUniqueInputObjectSchema } from './internals'

export const RegionPointFindUniqueSchema = Yup.object({
  where: RegionPointWhereUniqueInputObjectSchema,
}).required()
