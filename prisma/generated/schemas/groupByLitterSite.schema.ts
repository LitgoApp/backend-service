import { z } from 'zod';
import { LitterSiteWhereInputObjectSchema } from './objects/LitterSiteWhereInput.schema';
import { LitterSiteOrderByWithAggregationInputObjectSchema } from './objects/LitterSiteOrderByWithAggregationInput.schema';
import { LitterSiteScalarWhereWithAggregatesInputObjectSchema } from './objects/LitterSiteScalarWhereWithAggregatesInput.schema';
import { LitterSiteScalarFieldEnumSchema } from './enums/LitterSiteScalarFieldEnum.schema';

export const LitterSiteGroupBySchema = z.object({
  where: LitterSiteWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      LitterSiteOrderByWithAggregationInputObjectSchema,
      LitterSiteOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: LitterSiteScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(LitterSiteScalarFieldEnumSchema),
});
