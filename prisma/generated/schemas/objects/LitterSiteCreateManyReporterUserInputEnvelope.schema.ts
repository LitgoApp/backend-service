import { z } from 'zod';
import { LitterSiteCreateManyReporterUserInputObjectSchema } from './LitterSiteCreateManyReporterUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LitterSiteCreateManyReporterUserInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => LitterSiteCreateManyReporterUserInputObjectSchema),
        z.lazy(() => LitterSiteCreateManyReporterUserInputObjectSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const LitterSiteCreateManyReporterUserInputEnvelopeObjectSchema = Schema;
