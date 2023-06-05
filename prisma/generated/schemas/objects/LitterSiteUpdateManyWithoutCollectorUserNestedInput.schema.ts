import { z } from 'zod';
import { LitterSiteCreateWithoutCollectorUserInputObjectSchema } from './LitterSiteCreateWithoutCollectorUserInput.schema';
import { LitterSiteUncheckedCreateWithoutCollectorUserInputObjectSchema } from './LitterSiteUncheckedCreateWithoutCollectorUserInput.schema';
import { LitterSiteCreateOrConnectWithoutCollectorUserInputObjectSchema } from './LitterSiteCreateOrConnectWithoutCollectorUserInput.schema';
import { LitterSiteUpsertWithWhereUniqueWithoutCollectorUserInputObjectSchema } from './LitterSiteUpsertWithWhereUniqueWithoutCollectorUserInput.schema';
import { LitterSiteCreateManyCollectorUserInputEnvelopeObjectSchema } from './LitterSiteCreateManyCollectorUserInputEnvelope.schema';
import { LitterSiteWhereUniqueInputObjectSchema } from './LitterSiteWhereUniqueInput.schema';
import { LitterSiteUpdateWithWhereUniqueWithoutCollectorUserInputObjectSchema } from './LitterSiteUpdateWithWhereUniqueWithoutCollectorUserInput.schema';
import { LitterSiteUpdateManyWithWhereWithoutCollectorUserInputObjectSchema } from './LitterSiteUpdateManyWithWhereWithoutCollectorUserInput.schema';
import { LitterSiteScalarWhereInputObjectSchema } from './LitterSiteScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LitterSiteUpdateManyWithoutCollectorUserNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              LitterSiteUpsertWithWhereUniqueWithoutCollectorUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                LitterSiteUpsertWithWhereUniqueWithoutCollectorUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LitterSiteCreateManyCollectorUserInputEnvelopeObjectSchema)
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
              LitterSiteUpdateWithWhereUniqueWithoutCollectorUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                LitterSiteUpdateWithWhereUniqueWithoutCollectorUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              LitterSiteUpdateManyWithWhereWithoutCollectorUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                LitterSiteUpdateManyWithWhereWithoutCollectorUserInputObjectSchema,
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

export const LitterSiteUpdateManyWithoutCollectorUserNestedInputObjectSchema =
  Schema;
