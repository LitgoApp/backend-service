import { z } from 'zod';
import { LitterSiteWhereUniqueInputObjectSchema } from './LitterSiteWhereUniqueInput.schema';
import { LitterSiteCreateWithoutReporterUserInputObjectSchema } from './LitterSiteCreateWithoutReporterUserInput.schema';
import { LitterSiteUncheckedCreateWithoutReporterUserInputObjectSchema } from './LitterSiteUncheckedCreateWithoutReporterUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LitterSiteCreateOrConnectWithoutReporterUserInput> =
  z
    .object({
      where: z.lazy(() => LitterSiteWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => LitterSiteCreateWithoutReporterUserInputObjectSchema),
        z.lazy(
          () => LitterSiteUncheckedCreateWithoutReporterUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const LitterSiteCreateOrConnectWithoutReporterUserInputObjectSchema =
  Schema;
