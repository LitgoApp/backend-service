import { z } from 'zod';
import { DisposalSiteWhereInputObjectSchema } from './objects/DisposalSiteWhereInput.schema';
import { DisposalSiteOrderByWithAggregationInputObjectSchema } from './objects/DisposalSiteOrderByWithAggregationInput.schema';
import { DisposalSiteScalarWhereWithAggregatesInputObjectSchema } from './objects/DisposalSiteScalarWhereWithAggregatesInput.schema';
import { DisposalSiteScalarFieldEnumSchema } from './enums/DisposalSiteScalarFieldEnum.schema';

export const DisposalSiteGroupBySchema = z.object({
  where: DisposalSiteWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      DisposalSiteOrderByWithAggregationInputObjectSchema,
      DisposalSiteOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: DisposalSiteScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(DisposalSiteScalarFieldEnumSchema),
});
