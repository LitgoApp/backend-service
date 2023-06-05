import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MunicipalityCountOrderByAggregateInputObjectSchema } from './MunicipalityCountOrderByAggregateInput.schema';
import { MunicipalityMaxOrderByAggregateInputObjectSchema } from './MunicipalityMaxOrderByAggregateInput.schema';
import { MunicipalityMinOrderByAggregateInputObjectSchema } from './MunicipalityMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MunicipalityOrderByWithAggregationInput> = z
  .object({
    municipalityId: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    phoneNumber: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => MunicipalityCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => MunicipalityMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => MunicipalityMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const MunicipalityOrderByWithAggregationInputObjectSchema = Schema;
