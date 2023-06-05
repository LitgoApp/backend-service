import { z } from 'zod';
import { RewardWhereUniqueInputObjectSchema } from './objects/RewardWhereUniqueInput.schema';

export const RewardFindUniqueSchema = z.object({
  where: RewardWhereUniqueInputObjectSchema,
});
