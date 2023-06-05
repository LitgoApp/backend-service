import { z } from 'zod';
import { MunicipalityCreateNestedOneWithoutDisposalSitesInputObjectSchema } from './MunicipalityCreateNestedOneWithoutDisposalSitesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DisposalSiteCreateInput> = z
  .object({
    disposalSiteId: z.string().optional(),
    latitude: z.number(),
    longitude: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    municipality: z.lazy(
      () => MunicipalityCreateNestedOneWithoutDisposalSitesInputObjectSchema,
    ),
  })
  .strict();

export const DisposalSiteCreateInputObjectSchema = Schema;
