import { z } from 'zod';
import { RegionWhereInputObjectSchema } from './objects/RegionWhereInput.schema';
import { RegionOrderByWithAggregationInputObjectSchema } from './objects/RegionOrderByWithAggregationInput.schema';
import { RegionScalarWhereWithAggregatesInputObjectSchema } from './objects/RegionScalarWhereWithAggregatesInput.schema';
import { RegionScalarFieldEnumSchema } from './enums/RegionScalarFieldEnum.schema';

export const RegionGroupBySchema = z.object({
  where: RegionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      RegionOrderByWithAggregationInputObjectSchema,
      RegionOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: RegionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(RegionScalarFieldEnumSchema),
});
