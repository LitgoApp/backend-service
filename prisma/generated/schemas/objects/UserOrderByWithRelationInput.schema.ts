import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LitterSiteOrderByRelationAggregateInputObjectSchema } from './LitterSiteOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    userId: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    level: z.lazy(() => SortOrderSchema).optional(),
    points: z.lazy(() => SortOrderSchema).optional(),
    fraudLevel: z.lazy(() => SortOrderSchema).optional(),
    address: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    reportedLitter: z
      .lazy(() => LitterSiteOrderByRelationAggregateInputObjectSchema)
      .optional(),
    collectedLitter: z
      .lazy(() => LitterSiteOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
