import * as Yup from 'yup'
import {
  DisposalSiteWhereInputObjectSchema,
  DisposalSiteOrderByWithRelationInputObjectSchema,
  DisposalSiteWhereUniqueInputObjectSchema,
} from './internals'
import { DisposalSiteScalarFieldEnumSchema } from './internals'

export const DisposalSiteFindFirstSchema = Yup.object({
  where: DisposalSiteWhereInputObjectSchema,
  orderBy: DisposalSiteOrderByWithRelationInputObjectSchema,
  cursor: DisposalSiteWhereUniqueInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
  distinct: Yup.array().of(DisposalSiteScalarFieldEnumSchema),
}).required()
