import * as Yup from 'yup'
import {
  LitterSiteWhereInputObjectSchema,
  LitterSiteOrderByWithRelationInputObjectSchema,
  LitterSiteWhereUniqueInputObjectSchema,
} from './internals'
import { LitterSiteScalarFieldEnumSchema } from './internals'

export const LitterSiteFindManySchema = Yup.object({
  where: LitterSiteWhereInputObjectSchema,
  orderBy: LitterSiteOrderByWithRelationInputObjectSchema,
  cursor: LitterSiteWhereUniqueInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
  distinct: Yup.array().of(LitterSiteScalarFieldEnumSchema),
}).required()
