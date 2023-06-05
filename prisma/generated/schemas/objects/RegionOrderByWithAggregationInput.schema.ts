import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RegionCountOrderByAggregateInputObjectSchema } from './RegionCountOrderByAggregateInput.schema';
import { RegionMaxOrderByAggregateInputObjectSchema } from './RegionMaxOrderByAggregateInput.schema';
import { RegionMinOrderByAggregateInputObjectSchema } from './RegionMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionOrderByWithAggregationInput> = z
  .object({
    regionId: z.lazy(() => SortOrderSchema).optional(),
    municipalityId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => RegionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => RegionMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => RegionMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const RegionOrderByWithAggregationInputObjectSchema = Schema;
