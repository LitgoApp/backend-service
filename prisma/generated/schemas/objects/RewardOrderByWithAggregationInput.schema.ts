import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RewardCountOrderByAggregateInputObjectSchema } from './RewardCountOrderByAggregateInput.schema';
import { RewardAvgOrderByAggregateInputObjectSchema } from './RewardAvgOrderByAggregateInput.schema';
import { RewardMaxOrderByAggregateInputObjectSchema } from './RewardMaxOrderByAggregateInput.schema';
import { RewardMinOrderByAggregateInputObjectSchema } from './RewardMinOrderByAggregateInput.schema';
import { RewardSumOrderByAggregateInputObjectSchema } from './RewardSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RewardOrderByWithAggregationInput> = z
  .object({
    rewardId: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    cost: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => RewardCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => RewardAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => RewardMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => RewardMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => RewardSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const RewardOrderByWithAggregationInputObjectSchema = Schema;
