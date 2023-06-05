import { z } from 'zod';
import { RegionOrderByWithRelationInputObjectSchema } from './objects/RegionOrderByWithRelationInput.schema';
import { RegionWhereInputObjectSchema } from './objects/RegionWhereInput.schema';
import { RegionWhereUniqueInputObjectSchema } from './objects/RegionWhereUniqueInput.schema';
import { RegionCountAggregateInputObjectSchema } from './objects/RegionCountAggregateInput.schema';
import { RegionMinAggregateInputObjectSchema } from './objects/RegionMinAggregateInput.schema';
import { RegionMaxAggregateInputObjectSchema } from './objects/RegionMaxAggregateInput.schema';

export const RegionAggregateSchema = z.object({
  orderBy: z
    .union([
      RegionOrderByWithRelationInputObjectSchema,
      RegionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RegionWhereInputObjectSchema.optional(),
  cursor: RegionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), RegionCountAggregateInputObjectSchema])
    .optional(),
  _min: RegionMinAggregateInputObjectSchema.optional(),
  _max: RegionMaxAggregateInputObjectSchema.optional(),
});
