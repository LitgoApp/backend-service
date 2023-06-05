import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LitterSiteOrderByWithRelationInput> = z
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
    reporterUser: z
      .lazy(() => UserOrderByWithRelationInputObjectSchema)
      .optional(),
    collectorUser: z
      .lazy(() => UserOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const LitterSiteOrderByWithRelationInputObjectSchema = Schema;
