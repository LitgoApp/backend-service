import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RegionOrderByWithRelationInputObjectSchema } from './RegionOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionPointOrderByWithRelationInput> = z
  .object({
    regionPointId: z.lazy(() => SortOrderSchema).optional(),
    regionId: z.lazy(() => SortOrderSchema).optional(),
    latitude: z.lazy(() => SortOrderSchema).optional(),
    longitude: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    region: z.lazy(() => RegionOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const RegionPointOrderByWithRelationInputObjectSchema = Schema;
