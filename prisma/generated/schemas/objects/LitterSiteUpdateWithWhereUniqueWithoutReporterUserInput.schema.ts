import { z } from 'zod';
import { LitterSiteWhereUniqueInputObjectSchema } from './LitterSiteWhereUniqueInput.schema';
import { LitterSiteUpdateWithoutReporterUserInputObjectSchema } from './LitterSiteUpdateWithoutReporterUserInput.schema';
import { LitterSiteUncheckedUpdateWithoutReporterUserInputObjectSchema } from './LitterSiteUncheckedUpdateWithoutReporterUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LitterSiteUpdateWithWhereUniqueWithoutReporterUserInput> =
  z
    .object({
      where: z.lazy(() => LitterSiteWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => LitterSiteUpdateWithoutReporterUserInputObjectSchema),
        z.lazy(
          () => LitterSiteUncheckedUpdateWithoutReporterUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const LitterSiteUpdateWithWhereUniqueWithoutReporterUserInputObjectSchema =
  Schema;
