import { z } from 'zod';
import { RewardWhereUniqueInputObjectSchema } from './objects/RewardWhereUniqueInput.schema';

export const RewardDeleteOneSchema = z.object({
  where: RewardWhereUniqueInputObjectSchema,
});
