import { z } from 'zod';
import { DisposalSiteCreateManyMunicipalityInputObjectSchema } from './DisposalSiteCreateManyMunicipalityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DisposalSiteCreateManyMunicipalityInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => DisposalSiteCreateManyMunicipalityInputObjectSchema),
        z
          .lazy(() => DisposalSiteCreateManyMunicipalityInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const DisposalSiteCreateManyMunicipalityInputEnvelopeObjectSchema =
  Schema;
