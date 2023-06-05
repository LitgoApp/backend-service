import { z } from 'zod';
import { DisposalSiteOrderByWithRelationInputObjectSchema } from './objects/DisposalSiteOrderByWithRelationInput.schema';
import { DisposalSiteWhereInputObjectSchema } from './objects/DisposalSiteWhereInput.schema';
import { DisposalSiteWhereUniqueInputObjectSchema } from './objects/DisposalSiteWhereUniqueInput.schema';
import { DisposalSiteScalarFieldEnumSchema } from './enums/DisposalSiteScalarFieldEnum.schema';

export const DisposalSiteFindManySchema = z.object({
  orderBy: z
    .union([
      DisposalSiteOrderByWithRelationInputObjectSchema,
      DisposalSiteOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DisposalSiteWhereInputObjectSchema.optional(),
  cursor: DisposalSiteWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(DisposalSiteScalarFieldEnumSchema).optional(),
});
