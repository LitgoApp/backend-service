import { z } from 'zod';
import { RewardCreateInputObjectSchema } from './objects/RewardCreateInput.schema';
import { RewardUncheckedCreateInputObjectSchema } from './objects/RewardUncheckedCreateInput.schema';

export const RewardCreateOneSchema = z.object({
  data: z.union([
    RewardCreateInputObjectSchema,
    RewardUncheckedCreateInputObjectSchema,
  ]),
});
