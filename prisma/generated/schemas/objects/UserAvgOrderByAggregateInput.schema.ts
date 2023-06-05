import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserAvgOrderByAggregateInput> = z
  .object({
    level: z.lazy(() => SortOrderSchema).optional(),
    points: z.lazy(() => SortOrderSchema).optional(),
    fraudLevel: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const UserAvgOrderByAggregateInputObjectSchema = Schema;
