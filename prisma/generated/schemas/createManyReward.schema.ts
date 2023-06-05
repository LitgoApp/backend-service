import { z } from 'zod';
import { RewardCreateManyInputObjectSchema } from './objects/RewardCreateManyInput.schema';

export const RewardCreateManySchema = z.object({
  data: z.union([
    RewardCreateManyInputObjectSchema,
    z.array(RewardCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
