import * as Yup from 'yup'
import {
  LitterSiteWhereInputObjectSchema,
  LitterSiteOrderByWithAggregationInputObjectSchema,
  LitterSiteScalarWhereWithAggregatesInputObjectSchema,
} from './internals'
import { LitterSiteScalarFieldEnumSchema } from './internals'

export const LitterSiteGroupBySchema = Yup.object({
  where: LitterSiteWhereInputObjectSchema,
  orderBy: LitterSiteOrderByWithAggregationInputObjectSchema,
  having: LitterSiteScalarWhereWithAggregatesInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
  by: Yup.array().of(LitterSiteScalarFieldEnumSchema).required(),
}).required()
