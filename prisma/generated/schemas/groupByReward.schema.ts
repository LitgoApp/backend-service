import { z } from 'zod';
import { RewardWhereInputObjectSchema } from './objects/RewardWhereInput.schema';
import { RewardOrderByWithAggregationInputObjectSchema } from './objects/RewardOrderByWithAggregationInput.schema';
import { RewardScalarWhereWithAggregatesInputObjectSchema } from './objects/RewardScalarWhereWithAggregatesInput.schema';
import { RewardScalarFieldEnumSchema } from './enums/RewardScalarFieldEnum.schema';

export const RewardGroupBySchema = z.object({
  where: RewardWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      RewardOrderByWithAggregationInputObjectSchema,
      RewardOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: RewardScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(RewardScalarFieldEnumSchema),
});
