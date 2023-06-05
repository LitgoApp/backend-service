import { z } from 'zod';
import { DisposalSiteCreateWithoutMunicipalityInputObjectSchema } from './DisposalSiteCreateWithoutMunicipalityInput.schema';
import { DisposalSiteUncheckedCreateWithoutMunicipalityInputObjectSchema } from './DisposalSiteUncheckedCreateWithoutMunicipalityInput.schema';
import { DisposalSiteCreateOrConnectWithoutMunicipalityInputObjectSchema } from './DisposalSiteCreateOrConnectWithoutMunicipalityInput.schema';
import { DisposalSiteCreateManyMunicipalityInputEnvelopeObjectSchema } from './DisposalSiteCreateManyMunicipalityInputEnvelope.schema';
import { DisposalSiteWhereUniqueInputObjectSchema } from './DisposalSiteWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DisposalSiteUncheckedCreateNestedManyWithoutMunicipalityInput> =
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
      createMany: z
        .lazy(() => DisposalSiteCreateManyMunicipalityInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => DisposalSiteWhereUniqueInputObjectSchema),
          z.lazy(() => DisposalSiteWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const DisposalSiteUncheckedCreateNestedManyWithoutMunicipalityInputObjectSchema =
  Schema;
