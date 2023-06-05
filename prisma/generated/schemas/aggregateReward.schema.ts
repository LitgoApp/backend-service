import { z } from 'zod';
import { RewardOrderByWithRelationInputObjectSchema } from './objects/RewardOrderByWithRelationInput.schema';
import { RewardWhereInputObjectSchema } from './objects/RewardWhereInput.schema';
import { RewardWhereUniqueInputObjectSchema } from './objects/RewardWhereUniqueInput.schema';
import { RewardCountAggregateInputObjectSchema } from './objects/RewardCountAggregateInput.schema';
import { RewardMinAggregateInputObjectSchema } from './objects/RewardMinAggregateInput.schema';
import { RewardMaxAggregateInputObjectSchema } from './objects/RewardMaxAggregateInput.schema';
import { RewardAvgAggregateInputObjectSchema } from './objects/RewardAvgAggregateInput.schema';
import { RewardSumAggregateInputObjectSchema } from './objects/RewardSumAggregateInput.schema';

export const RewardAggregateSchema = z.object({
  orderBy: z
    .union([
      RewardOrderByWithRelationInputObjectSchema,
      RewardOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RewardWhereInputObjectSchema.optional(),
  cursor: RewardWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), RewardCountAggregateInputObjectSchema])
    .optional(),
  _min: RewardMinAggregateInputObjectSchema.optional(),
  _max: RewardMaxAggregateInputObjectSchema.optional(),
  _avg: RewardAvgAggregateInputObjectSchema.optional(),
  _sum: RewardSumAggregateInputObjectSchema.optional(),
});
