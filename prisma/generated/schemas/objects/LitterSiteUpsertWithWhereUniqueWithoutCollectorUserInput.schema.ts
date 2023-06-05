import { z } from 'zod';
import { LitterSiteWhereUniqueInputObjectSchema } from './LitterSiteWhereUniqueInput.schema';
import { LitterSiteUpdateWithoutCollectorUserInputObjectSchema } from './LitterSiteUpdateWithoutCollectorUserInput.schema';
import { LitterSiteUncheckedUpdateWithoutCollectorUserInputObjectSchema } from './LitterSiteUncheckedUpdateWithoutCollectorUserInput.schema';
import { LitterSiteCreateWithoutCollectorUserInputObjectSchema } from './LitterSiteCreateWithoutCollectorUserInput.schema';
import { LitterSiteUncheckedCreateWithoutCollectorUserInputObjectSchema } from './LitterSiteUncheckedCreateWithoutCollectorUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LitterSiteUpsertWithWhereUniqueWithoutCollectorUserInput> =
  z
    .object({
      where: z.lazy(() => LitterSiteWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => LitterSiteUpdateWithoutCollectorUserInputObjectSchema),
        z.lazy(
          () => LitterSiteUncheckedUpdateWithoutCollectorUserInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => LitterSiteCreateWithoutCollectorUserInputObjectSchema),
        z.lazy(
          () => LitterSiteUncheckedCreateWithoutCollectorUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const LitterSiteUpsertWithWhereUniqueWithoutCollectorUserInputObjectSchema =
  Schema;
