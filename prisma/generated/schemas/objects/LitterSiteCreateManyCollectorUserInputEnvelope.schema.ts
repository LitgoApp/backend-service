import { z } from 'zod';
import { LitterSiteCreateManyCollectorUserInputObjectSchema } from './LitterSiteCreateManyCollectorUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LitterSiteCreateManyCollectorUserInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => LitterSiteCreateManyCollectorUserInputObjectSchema),
        z
          .lazy(() => LitterSiteCreateManyCollectorUserInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const LitterSiteCreateManyCollectorUserInputEnvelopeObjectSchema =
  Schema;
