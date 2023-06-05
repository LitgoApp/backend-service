import { z } from 'zod';
import { RegionPointOrderByWithRelationInputObjectSchema } from './objects/RegionPointOrderByWithRelationInput.schema';
import { RegionPointWhereInputObjectSchema } from './objects/RegionPointWhereInput.schema';
import { RegionPointWhereUniqueInputObjectSchema } from './objects/RegionPointWhereUniqueInput.schema';
import { RegionPointCountAggregateInputObjectSchema } from './objects/RegionPointCountAggregateInput.schema';
import { RegionPointMinAggregateInputObjectSchema } from './objects/RegionPointMinAggregateInput.schema';
import { RegionPointMaxAggregateInputObjectSchema } from './objects/RegionPointMaxAggregateInput.schema';
import { RegionPointAvgAggregateInputObjectSchema } from './objects/RegionPointAvgAggregateInput.schema';
import { RegionPointSumAggregateInputObjectSchema } from './objects/RegionPointSumAggregateInput.schema';

export const RegionPointAggregateSchema = z.object({
  orderBy: z
    .union([
      RegionPointOrderByWithRelationInputObjectSchema,
      RegionPointOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RegionPointWhereInputObjectSchema.optional(),
  cursor: RegionPointWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), RegionPointCountAggregateInputObjectSchema])
    .optional(),
  _min: RegionPointMinAggregateInputObjectSchema.optional(),
  _max: RegionPointMaxAggregateInputObjectSchema.optional(),
  _avg: RegionPointAvgAggregateInputObjectSchema.optional(),
  _sum: RegionPointSumAggregateInputObjectSchema.optional(),
});
