import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RewardWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RewardWhereInputObjectSchema),
        z.lazy(() => RewardWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RewardWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RewardWhereInputObjectSchema),
        z.lazy(() => RewardWhereInputObjectSchema).array(),
      ])
      .optional(),
    rewardId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    cost: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
  })
  .strict();

export const RewardWhereInputObjectSchema = Schema;
