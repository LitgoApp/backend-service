import { z } from 'zod';
import { LitterSiteWhereUniqueInputObjectSchema } from './LitterSiteWhereUniqueInput.schema';
import { LitterSiteCreateWithoutCollectorUserInputObjectSchema } from './LitterSiteCreateWithoutCollectorUserInput.schema';
import { LitterSiteUncheckedCreateWithoutCollectorUserInputObjectSchema } from './LitterSiteUncheckedCreateWithoutCollectorUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LitterSiteCreateOrConnectWithoutCollectorUserInput> =
  z
    .object({
      where: z.lazy(() => LitterSiteWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => LitterSiteCreateWithoutCollectorUserInputObjectSchema),
        z.lazy(
          () => LitterSiteUncheckedCreateWithoutCollectorUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const LitterSiteCreateOrConnectWithoutCollectorUserInputObjectSchema =
  Schema;
