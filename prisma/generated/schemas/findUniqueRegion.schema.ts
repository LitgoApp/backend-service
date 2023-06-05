import * as Yup from 'yup'
import { RegionWhereUniqueInputObjectSchema } from './internals'

export const RegionFindUniqueSchema = Yup.object({
  where: RegionWhereUniqueInputObjectSchema,
}).required()
