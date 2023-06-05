import { z } from 'zod';
import { RegionPointWhereInputObjectSchema } from './objects/RegionPointWhereInput.schema';
import { RegionPointOrderByWithAggregationInputObjectSchema } from './objects/RegionPointOrderByWithAggregationInput.schema';
import { RegionPointScalarWhereWithAggregatesInputObjectSchema } from './objects/RegionPointScalarWhereWithAggregatesInput.schema';
import { RegionPointScalarFieldEnumSchema } from './enums/RegionPointScalarFieldEnum.schema';

export const RegionPointGroupBySchema = z.object({
  where: RegionPointWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      RegionPointOrderByWithAggregationInputObjectSchema,
      RegionPointOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: RegionPointScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(RegionPointScalarFieldEnumSchema),
});
