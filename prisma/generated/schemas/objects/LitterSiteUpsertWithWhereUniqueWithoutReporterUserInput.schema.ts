import { z } from 'zod';
import { LitterSiteWhereUniqueInputObjectSchema } from './LitterSiteWhereUniqueInput.schema';
import { LitterSiteUpdateWithoutReporterUserInputObjectSchema } from './LitterSiteUpdateWithoutReporterUserInput.schema';
import { LitterSiteUncheckedUpdateWithoutReporterUserInputObjectSchema } from './LitterSiteUncheckedUpdateWithoutReporterUserInput.schema';
import { LitterSiteCreateWithoutReporterUserInputObjectSchema } from './LitterSiteCreateWithoutReporterUserInput.schema';
import { LitterSiteUncheckedCreateWithoutReporterUserInputObjectSchema } from './LitterSiteUncheckedCreateWithoutReporterUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LitterSiteUpsertWithWhereUniqueWithoutReporterUserInput> =
  z
    .object({
      where: z.lazy(() => LitterSiteWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => LitterSiteUpdateWithoutReporterUserInputObjectSchema),
        z.lazy(
          () => LitterSiteUncheckedUpdateWithoutReporterUserInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => LitterSiteCreateWithoutReporterUserInputObjectSchema),
        z.lazy(
          () => LitterSiteUncheckedCreateWithoutReporterUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const LitterSiteUpsertWithWhereUniqueWithoutReporterUserInputObjectSchema =
  Schema;
