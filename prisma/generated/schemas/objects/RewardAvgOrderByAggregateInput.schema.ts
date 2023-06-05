import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RewardAvgOrderByAggregateInput> = z
  .object({
    cost: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const RewardAvgOrderByAggregateInputObjectSchema = Schema;
