import { z } from 'zod';
import { RewardUpdateManyMutationInputObjectSchema } from './objects/RewardUpdateManyMutationInput.schema';
import { RewardWhereInputObjectSchema } from './objects/RewardWhereInput.schema';

export const RewardUpdateManySchema = z.object({
  data: RewardUpdateManyMutationInputObjectSchema,
  where: RewardWhereInputObjectSchema.optional(),
});
