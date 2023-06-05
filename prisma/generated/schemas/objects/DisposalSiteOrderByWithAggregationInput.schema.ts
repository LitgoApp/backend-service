import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DisposalSiteCountOrderByAggregateInputObjectSchema } from './DisposalSiteCountOrderByAggregateInput.schema';
import { DisposalSiteAvgOrderByAggregateInputObjectSchema } from './DisposalSiteAvgOrderByAggregateInput.schema';
import { DisposalSiteMaxOrderByAggregateInputObjectSchema } from './DisposalSiteMaxOrderByAggregateInput.schema';
import { DisposalSiteMinOrderByAggregateInputObjectSchema } from './DisposalSiteMinOrderByAggregateInput.schema';
import { DisposalSiteSumOrderByAggregateInputObjectSchema } from './DisposalSiteSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DisposalSiteOrderByWithAggregationInput> = z
  .object({
    disposalSiteId: z.lazy(() => SortOrderSchema).optional(),
    municipalityId: z.lazy(() => SortOrderSchema).optional(),
    latitude: z.lazy(() => SortOrderSchema).optional(),
    longitude: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => DisposalSiteCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => DisposalSiteAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => DisposalSiteMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => DisposalSiteMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => DisposalSiteSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const DisposalSiteOrderByWithAggregationInputObjectSchema = Schema;
