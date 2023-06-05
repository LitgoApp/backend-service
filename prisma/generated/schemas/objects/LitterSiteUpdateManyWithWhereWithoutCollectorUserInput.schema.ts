import { z } from 'zod';
import { LitterSiteScalarWhereInputObjectSchema } from './LitterSiteScalarWhereInput.schema';
import { LitterSiteUpdateManyMutationInputObjectSchema } from './LitterSiteUpdateManyMutationInput.schema';
import { LitterSiteUncheckedUpdateManyWithoutCollectedLitterInputObjectSchema } from './LitterSiteUncheckedUpdateManyWithoutCollectedLitterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LitterSiteUpdateManyWithWhereWithoutCollectorUserInput> =
  z
    .object({
      where: z.lazy(() => LitterSiteScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => LitterSiteUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            LitterSiteUncheckedUpdateManyWithoutCollectedLitterInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const LitterSiteUpdateManyWithWhereWithoutCollectorUserInputObjectSchema =
  Schema;
