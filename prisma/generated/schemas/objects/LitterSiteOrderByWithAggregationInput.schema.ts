import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LitterSiteCountOrderByAggregateInputObjectSchema } from './LitterSiteCountOrderByAggregateInput.schema';
import { LitterSiteAvgOrderByAggregateInputObjectSchema } from './LitterSiteAvgOrderByAggregateInput.schema';
import { LitterSiteMaxOrderByAggregateInputObjectSchema } from './LitterSiteMaxOrderByAggregateInput.schema';
import { LitterSiteMinOrderByAggregateInputObjectSchema } from './LitterSiteMinOrderByAggregateInput.schema';
import { LitterSiteSumOrderByAggregateInputObjectSchema } from './LitterSiteSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LitterSiteOrderByWithAggregationInput> = z
  .object({
    litterSiteId: z.lazy(() => SortOrderSchema).optional(),
    reporterUserId: z.lazy(() => SortOrderSchema).optional(),
    collectorUserId: z.lazy(() => SortOrderSchema).optional(),
    isCollected: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    harmful: z.lazy(() => SortOrderSchema).optional(),
    latitude: z.lazy(() => SortOrderSchema).optional(),
    longitude: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => LitterSiteCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => LitterSiteAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => LitterSiteMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => LitterSiteMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => LitterSiteSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const LitterSiteOrderByWithAggregationInputObjectSchema = Schema;
