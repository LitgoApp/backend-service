import { z } from 'zod';
import { LitterSiteWhereUniqueInputObjectSchema } from './LitterSiteWhereUniqueInput.schema';
import { LitterSiteUpdateWithoutCollectorUserInputObjectSchema } from './LitterSiteUpdateWithoutCollectorUserInput.schema';
import { LitterSiteUncheckedUpdateWithoutCollectorUserInputObjectSchema } from './LitterSiteUncheckedUpdateWithoutCollectorUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LitterSiteUpdateWithWhereUniqueWithoutCollectorUserInput> =
  z
    .object({
      where: z.lazy(() => LitterSiteWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => LitterSiteUpdateWithoutCollectorUserInputObjectSchema),
        z.lazy(
          () => LitterSiteUncheckedUpdateWithoutCollectorUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const LitterSiteUpdateWithWhereUniqueWithoutCollectorUserInputObjectSchema =
  Schema;
