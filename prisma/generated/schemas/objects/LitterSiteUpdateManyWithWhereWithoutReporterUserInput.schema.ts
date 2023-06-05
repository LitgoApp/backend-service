import { z } from 'zod';
import { LitterSiteScalarWhereInputObjectSchema } from './LitterSiteScalarWhereInput.schema';
import { LitterSiteUpdateManyMutationInputObjectSchema } from './LitterSiteUpdateManyMutationInput.schema';
import { LitterSiteUncheckedUpdateManyWithoutReportedLitterInputObjectSchema } from './LitterSiteUncheckedUpdateManyWithoutReportedLitterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LitterSiteUpdateManyWithWhereWithoutReporterUserInput> =
  z
    .object({
      where: z.lazy(() => LitterSiteScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => LitterSiteUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            LitterSiteUncheckedUpdateManyWithoutReportedLitterInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const LitterSiteUpdateManyWithWhereWithoutReporterUserInputObjectSchema =
  Schema;
