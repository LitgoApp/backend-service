import { z } from 'zod';
import { RewardUpdateInputObjectSchema } from './objects/RewardUpdateInput.schema';
import { RewardUncheckedUpdateInputObjectSchema } from './objects/RewardUncheckedUpdateInput.schema';
import { RewardWhereUniqueInputObjectSchema } from './objects/RewardWhereUniqueInput.schema';

export const RewardUpdateOneSchema = z.object({
  data: z.union([
    RewardUpdateInputObjectSchema,
    RewardUncheckedUpdateInputObjectSchema,
  ]),
  where: RewardWhereUniqueInputObjectSchema,
});
