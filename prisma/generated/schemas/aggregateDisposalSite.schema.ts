import * as Yup from 'yup'
import {
  DisposalSiteWhereInputObjectSchema,
  DisposalSiteOrderByWithRelationInputObjectSchema,
  DisposalSiteWhereUniqueInputObjectSchema,
} from './internals'

export const DisposalSiteAggregateSchema = Yup.object({
  where: DisposalSiteWhereInputObjectSchema,
  orderBy: DisposalSiteOrderByWithRelationInputObjectSchema,
  cursor: DisposalSiteWhereUniqueInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
}).required()
