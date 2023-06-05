import { z } from 'zod';
import { LitterSiteCreateWithoutReporterUserInputObjectSchema } from './LitterSiteCreateWithoutReporterUserInput.schema';
import { LitterSiteUncheckedCreateWithoutReporterUserInputObjectSchema } from './LitterSiteUncheckedCreateWithoutReporterUserInput.schema';
import { LitterSiteCreateOrConnectWithoutReporterUserInputObjectSchema } from './LitterSiteCreateOrConnectWithoutReporterUserInput.schema';
import { LitterSiteUpsertWithWhereUniqueWithoutReporterUserInputObjectSchema } from './LitterSiteUpsertWithWhereUniqueWithoutReporterUserInput.schema';
import { LitterSiteCreateManyReporterUserInputEnvelopeObjectSchema } from './LitterSiteCreateManyReporterUserInputEnvelope.schema';
import { LitterSiteWhereUniqueInputObjectSchema } from './LitterSiteWhereUniqueInput.schema';
import { LitterSiteUpdateWithWhereUniqueWithoutReporterUserInputObjectSchema } from './LitterSiteUpdateWithWhereUniqueWithoutReporterUserInput.schema';
import { LitterSiteUpdateManyWithWhereWithoutReporterUserInputObjectSchema } from './LitterSiteUpdateManyWithWhereWithoutReporterUserInput.schema';
import { LitterSiteScalarWhereInputObjectSchema } from './LitterSiteScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LitterSiteUncheckedUpdateManyWithoutReporterUserNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              LitterSiteUpsertWithWhereUniqueWithoutReporterUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                LitterSiteUpsertWithWhereUniqueWithoutReporterUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LitterSiteCreateManyReporterUserInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => LitterSiteWhereUniqueInputObjectSchema),
          z.lazy(() => LitterSiteWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => LitterSiteWhereUniqueInputObjectSchema),
          z.lazy(() => LitterSiteWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => LitterSiteWhereUniqueInputObjectSchema),
          z.lazy(() => LitterSiteWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => LitterSiteWhereUniqueInputObjectSchema),
          z.lazy(() => LitterSiteWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              LitterSiteUpdateWithWhereUniqueWithoutReporterUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                LitterSiteUpdateWithWhereUniqueWithoutReporterUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              LitterSiteUpdateManyWithWhereWithoutReporterUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                LitterSiteUpdateManyWithWhereWithoutReporterUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => LitterSiteScalarWhereInputObjectSchema),
          z.lazy(() => LitterSiteScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LitterSiteUncheckedUpdateManyWithoutReporterUserNestedInputObjectSchema =
  Schema;
