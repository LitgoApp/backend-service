import { z } from 'zod';
import { RewardOrderByWithRelationInputObjectSchema } from './objects/RewardOrderByWithRelationInput.schema';
import { RewardWhereInputObjectSchema } from './objects/RewardWhereInput.schema';
import { RewardWhereUniqueInputObjectSchema } from './objects/RewardWhereUniqueInput.schema';
import { RewardScalarFieldEnumSchema } from './enums/RewardScalarFieldEnum.schema';

export const RewardFindFirstSchema = z.object({
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
  distinct: z.array(RewardScalarFieldEnumSchema).optional(),
});
