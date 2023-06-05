import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RegionPointCountOrderByAggregateInputObjectSchema } from './RegionPointCountOrderByAggregateInput.schema';
import { RegionPointAvgOrderByAggregateInputObjectSchema } from './RegionPointAvgOrderByAggregateInput.schema';
import { RegionPointMaxOrderByAggregateInputObjectSchema } from './RegionPointMaxOrderByAggregateInput.schema';
import { RegionPointMinOrderByAggregateInputObjectSchema } from './RegionPointMinOrderByAggregateInput.schema';
import { RegionPointSumOrderByAggregateInputObjectSchema } from './RegionPointSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionPointOrderByWithAggregationInput> = z
  .object({
    regionPointId: z.lazy(() => SortOrderSchema).optional(),
    regionId: z.lazy(() => SortOrderSchema).optional(),
    latitude: z.lazy(() => SortOrderSchema).optional(),
    longitude: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => RegionPointCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => RegionPointAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => RegionPointMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => RegionPointMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => RegionPointSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const RegionPointOrderByWithAggregationInputObjectSchema = Schema;
