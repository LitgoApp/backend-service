import { z } from 'zod';
import { LitterSiteCreateWithoutReporterUserInputObjectSchema } from './LitterSiteCreateWithoutReporterUserInput.schema';
import { LitterSiteUncheckedCreateWithoutReporterUserInputObjectSchema } from './LitterSiteUncheckedCreateWithoutReporterUserInput.schema';
import { LitterSiteCreateOrConnectWithoutReporterUserInputObjectSchema } from './LitterSiteCreateOrConnectWithoutReporterUserInput.schema';
import { LitterSiteCreateManyReporterUserInputEnvelopeObjectSchema } from './LitterSiteCreateManyReporterUserInputEnvelope.schema';
import { LitterSiteWhereUniqueInputObjectSchema } from './LitterSiteWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LitterSiteCreateNestedManyWithoutReporterUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LitterSiteCreateWithoutReporterUserInputObjectSchema),
          z
            .lazy(() => LitterSiteCreateWithoutReporterUserInputObjectSchema)
            .array(),
          z.lazy(
            () => LitterSiteUncheckedCreateWithoutReporterUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                LitterSiteUncheckedCreateWithoutReporterUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => LitterSiteCreateOrConnectWithoutReporterUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                LitterSiteCreateOrConnectWithoutReporterUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LitterSiteCreateManyReporterUserInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => LitterSiteWhereUniqueInputObjectSchema),
          z.lazy(() => LitterSiteWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LitterSiteCreateNestedManyWithoutReporterUserInputObjectSchema =
  Schema;
