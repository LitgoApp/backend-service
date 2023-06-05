import { z } from 'zod';
import { LitterSiteCreateWithoutCollectorUserInputObjectSchema } from './LitterSiteCreateWithoutCollectorUserInput.schema';
import { LitterSiteUncheckedCreateWithoutCollectorUserInputObjectSchema } from './LitterSiteUncheckedCreateWithoutCollectorUserInput.schema';
import { LitterSiteCreateOrConnectWithoutCollectorUserInputObjectSchema } from './LitterSiteCreateOrConnectWithoutCollectorUserInput.schema';
import { LitterSiteCreateManyCollectorUserInputEnvelopeObjectSchema } from './LitterSiteCreateManyCollectorUserInputEnvelope.schema';
import { LitterSiteWhereUniqueInputObjectSchema } from './LitterSiteWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LitterSiteUncheckedCreateNestedManyWithoutCollectorUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LitterSiteCreateWithoutCollectorUserInputObjectSchema),
          z
            .lazy(() => LitterSiteCreateWithoutCollectorUserInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              LitterSiteUncheckedCreateWithoutCollectorUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                LitterSiteUncheckedCreateWithoutCollectorUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              LitterSiteCreateOrConnectWithoutCollectorUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                LitterSiteCreateOrConnectWithoutCollectorUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LitterSiteCreateManyCollectorUserInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => LitterSiteWhereUniqueInputObjectSchema),
          z.lazy(() => LitterSiteWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LitterSiteUncheckedCreateNestedManyWithoutCollectorUserInputObjectSchema =
  Schema;
