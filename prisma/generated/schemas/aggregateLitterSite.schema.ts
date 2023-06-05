import * as Yup from 'yup'
import {
  LitterSiteWhereInputObjectSchema,
  LitterSiteOrderByWithRelationInputObjectSchema,
  LitterSiteWhereUniqueInputObjectSchema,
} from './internals'

export const LitterSiteAggregateSchema = Yup.object({
  where: LitterSiteWhereInputObjectSchema,
  orderBy: LitterSiteOrderByWithRelationInputObjectSchema,
  cursor: LitterSiteWhereUniqueInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
}).required()
