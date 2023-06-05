import * as Yup from 'yup'
import {
  DisposalSiteWhereInputObjectSchema,
  DisposalSiteOrderByWithAggregationInputObjectSchema,
  DisposalSiteScalarWhereWithAggregatesInputObjectSchema,
} from './internals'
import { DisposalSiteScalarFieldEnumSchema } from './internals'

export const DisposalSiteGroupBySchema = Yup.object({
  where: DisposalSiteWhereInputObjectSchema,
  orderBy: DisposalSiteOrderByWithAggregationInputObjectSchema,
  having: DisposalSiteScalarWhereWithAggregatesInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
  by: Yup.array().of(DisposalSiteScalarFieldEnumSchema).required(),
}).required()
