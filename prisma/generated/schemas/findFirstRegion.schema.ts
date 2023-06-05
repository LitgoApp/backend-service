import { z } from 'zod';
import { RegionOrderByWithRelationInputObjectSchema } from './objects/RegionOrderByWithRelationInput.schema';
import { RegionWhereInputObjectSchema } from './objects/RegionWhereInput.schema';
import { RegionWhereUniqueInputObjectSchema } from './objects/RegionWhereUniqueInput.schema';
import { RegionScalarFieldEnumSchema } from './enums/RegionScalarFieldEnum.schema';

export const RegionFindFirstSchema = z.object({
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
  distinct: z.array(RegionScalarFieldEnumSchema).optional(),
});
