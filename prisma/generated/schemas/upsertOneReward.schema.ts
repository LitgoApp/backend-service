import { z } from 'zod';
import { RewardWhereUniqueInputObjectSchema } from './objects/RewardWhereUniqueInput.schema';
import { RewardCreateInputObjectSchema } from './objects/RewardCreateInput.schema';
import { RewardUncheckedCreateInputObjectSchema } from './objects/RewardUncheckedCreateInput.schema';
import { RewardUpdateInputObjectSchema } from './objects/RewardUpdateInput.schema';
import { RewardUncheckedUpdateInputObjectSchema } from './objects/RewardUncheckedUpdateInput.schema';

export const RewardUpsertSchema = z.object({
  where: RewardWhereUniqueInputObjectSchema,
  create: z.union([
    RewardCreateInputObjectSchema,
    RewardUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    RewardUpdateInputObjectSchema,
    RewardUncheckedUpdateInputObjectSchema,
  ]),
});
