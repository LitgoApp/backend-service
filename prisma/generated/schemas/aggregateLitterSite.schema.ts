import { z } from 'zod';
import { LitterSiteOrderByWithRelationInputObjectSchema } from './objects/LitterSiteOrderByWithRelationInput.schema';
import { LitterSiteWhereInputObjectSchema } from './objects/LitterSiteWhereInput.schema';
import { LitterSiteWhereUniqueInputObjectSchema } from './objects/LitterSiteWhereUniqueInput.schema';
import { LitterSiteCountAggregateInputObjectSchema } from './objects/LitterSiteCountAggregateInput.schema';
import { LitterSiteMinAggregateInputObjectSchema } from './objects/LitterSiteMinAggregateInput.schema';
import { LitterSiteMaxAggregateInputObjectSchema } from './objects/LitterSiteMaxAggregateInput.schema';
import { LitterSiteAvgAggregateInputObjectSchema } from './objects/LitterSiteAvgAggregateInput.schema';
import { LitterSiteSumAggregateInputObjectSchema } from './objects/LitterSiteSumAggregateInput.schema';

export const LitterSiteAggregateSchema = z.object({
  orderBy: z
    .union([
      LitterSiteOrderByWithRelationInputObjectSchema,
      LitterSiteOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: LitterSiteWhereInputObjectSchema.optional(),
  cursor: LitterSiteWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), LitterSiteCountAggregateInputObjectSchema])
    .optional(),
  _min: LitterSiteMinAggregateInputObjectSchema.optional(),
  _max: LitterSiteMaxAggregateInputObjectSchema.optional(),
  _avg: LitterSiteAvgAggregateInputObjectSchema.optional(),
  _sum: LitterSiteSumAggregateInputObjectSchema.optional(),
});
