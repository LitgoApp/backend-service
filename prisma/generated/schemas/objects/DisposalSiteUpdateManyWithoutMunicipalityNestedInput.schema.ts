import { z } from 'zod';
import { DisposalSiteCreateWithoutMunicipalityInputObjectSchema } from './DisposalSiteCreateWithoutMunicipalityInput.schema';
import { DisposalSiteUncheckedCreateWithoutMunicipalityInputObjectSchema } from './DisposalSiteUncheckedCreateWithoutMunicipalityInput.schema';
import { DisposalSiteCreateOrConnectWithoutMunicipalityInputObjectSchema } from './DisposalSiteCreateOrConnectWithoutMunicipalityInput.schema';
import { DisposalSiteUpsertWithWhereUniqueWithoutMunicipalityInputObjectSchema } from './DisposalSiteUpsertWithWhereUniqueWithoutMunicipalityInput.schema';
import { DisposalSiteCreateManyMunicipalityInputEnvelopeObjectSchema } from './DisposalSiteCreateManyMunicipalityInputEnvelope.schema';
import { DisposalSiteWhereUniqueInputObjectSchema } from './DisposalSiteWhereUniqueInput.schema';
import { DisposalSiteUpdateWithWhereUniqueWithoutMunicipalityInputObjectSchema } from './DisposalSiteUpdateWithWhereUniqueWithoutMunicipalityInput.schema';
import { DisposalSiteUpdateManyWithWhereWithoutMunicipalityInputObjectSchema } from './DisposalSiteUpdateManyWithWhereWithoutMunicipalityInput.schema';
import { DisposalSiteScalarWhereInputObjectSchema } from './DisposalSiteScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DisposalSiteUpdateManyWithoutMunicipalityNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DisposalSiteCreateWithoutMunicipalityInputObjectSchema),
          z
            .lazy(() => DisposalSiteCreateWithoutMunicipalityInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              DisposalSiteUncheckedCreateWithoutMunicipalityInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DisposalSiteUncheckedCreateWithoutMunicipalityInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              DisposalSiteCreateOrConnectWithoutMunicipalityInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DisposalSiteCreateOrConnectWithoutMunicipalityInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              DisposalSiteUpsertWithWhereUniqueWithoutMunicipalityInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DisposalSiteUpsertWithWhereUniqueWithoutMunicipalityInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => DisposalSiteCreateManyMunicipalityInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => DisposalSiteWhereUniqueInputObjectSchema),
          z.lazy(() => DisposalSiteWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => DisposalSiteWhereUniqueInputObjectSchema),
          z.lazy(() => DisposalSiteWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => DisposalSiteWhereUniqueInputObjectSchema),
          z.lazy(() => DisposalSiteWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => DisposalSiteWhereUniqueInputObjectSchema),
          z.lazy(() => DisposalSiteWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              DisposalSiteUpdateWithWhereUniqueWithoutMunicipalityInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DisposalSiteUpdateWithWhereUniqueWithoutMunicipalityInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              DisposalSiteUpdateManyWithWhereWithoutMunicipalityInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DisposalSiteUpdateManyWithWhereWithoutMunicipalityInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => DisposalSiteScalarWhereInputObjectSchema),
          z.lazy(() => DisposalSiteScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const DisposalSiteUpdateManyWithoutMunicipalityNestedInputObjectSchema =
  Schema;
