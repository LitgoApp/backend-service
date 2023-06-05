import { z } from 'zod';
import { RewardWhereInputObjectSchema } from './objects/RewardWhereInput.schema';

export const RewardDeleteManySchema = z.object({
  where: RewardWhereInputObjectSchema.optional(),
});
