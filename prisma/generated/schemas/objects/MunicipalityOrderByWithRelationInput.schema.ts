import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RegionOrderByRelationAggregateInputObjectSchema } from './RegionOrderByRelationAggregateInput.schema';
import { DisposalSiteOrderByRelationAggregateInputObjectSchema } from './DisposalSiteOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MunicipalityOrderByWithRelationInput> = z
  .object({
    municipalityId: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    phoneNumber: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    regions: z
      .lazy(() => RegionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    disposalSites: z
      .lazy(() => DisposalSiteOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const MunicipalityOrderByWithRelationInputObjectSchema = Schema;
