import { z } from 'zod';
import { RegionPointOrderByWithRelationInputObjectSchema } from './objects/RegionPointOrderByWithRelationInput.schema';
import { RegionPointWhereInputObjectSchema } from './objects/RegionPointWhereInput.schema';
import { RegionPointWhereUniqueInputObjectSchema } from './objects/RegionPointWhereUniqueInput.schema';
import { RegionPointScalarFieldEnumSchema } from './enums/RegionPointScalarFieldEnum.schema';

export const RegionPointFindManySchema = z.object({
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
  distinct: z.array(RegionPointScalarFieldEnumSchema).optional(),
});
