import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DisposalSiteMaxOrderByAggregateInput> = z
  .object({
    disposalSiteId: z.lazy(() => SortOrderSchema).optional(),
    municipalityId: z.lazy(() => SortOrderSchema).optional(),
    latitude: z.lazy(() => SortOrderSchema).optional(),
    longitude: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const DisposalSiteMaxOrderByAggregateInputObjectSchema = Schema;
