import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MunicipalityOrderByWithRelationInputObjectSchema } from './MunicipalityOrderByWithRelationInput.schema';
import { RegionPointOrderByRelationAggregateInputObjectSchema } from './RegionPointOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionOrderByWithRelationInput> = z
  .object({
    regionId: z.lazy(() => SortOrderSchema).optional(),
    municipalityId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    municipality: z
      .lazy(() => MunicipalityOrderByWithRelationInputObjectSchema)
      .optional(),
    points: z
      .lazy(() => RegionPointOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const RegionOrderByWithRelationInputObjectSchema = Schema;
