import { z } from 'zod';
import { DisposalSiteOrderByWithRelationInputObjectSchema } from './objects/DisposalSiteOrderByWithRelationInput.schema';
import { DisposalSiteWhereInputObjectSchema } from './objects/DisposalSiteWhereInput.schema';
import { DisposalSiteWhereUniqueInputObjectSchema } from './objects/DisposalSiteWhereUniqueInput.schema';
import { DisposalSiteCountAggregateInputObjectSchema } from './objects/DisposalSiteCountAggregateInput.schema';
import { DisposalSiteMinAggregateInputObjectSchema } from './objects/DisposalSiteMinAggregateInput.schema';
import { DisposalSiteMaxAggregateInputObjectSchema } from './objects/DisposalSiteMaxAggregateInput.schema';
import { DisposalSiteAvgAggregateInputObjectSchema } from './objects/DisposalSiteAvgAggregateInput.schema';
import { DisposalSiteSumAggregateInputObjectSchema } from './objects/DisposalSiteSumAggregateInput.schema';

export const DisposalSiteAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), DisposalSiteCountAggregateInputObjectSchema])
    .optional(),
  _min: DisposalSiteMinAggregateInputObjectSchema.optional(),
  _max: DisposalSiteMaxAggregateInputObjectSchema.optional(),
  _avg: DisposalSiteAvgAggregateInputObjectSchema.optional(),
  _sum: DisposalSiteSumAggregateInputObjectSchema.optional(),
});
