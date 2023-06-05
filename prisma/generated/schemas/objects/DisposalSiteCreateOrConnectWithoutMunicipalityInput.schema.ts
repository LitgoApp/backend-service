import { z } from 'zod';
import { DisposalSiteWhereUniqueInputObjectSchema } from './DisposalSiteWhereUniqueInput.schema';
import { DisposalSiteCreateWithoutMunicipalityInputObjectSchema } from './DisposalSiteCreateWithoutMunicipalityInput.schema';
import { DisposalSiteUncheckedCreateWithoutMunicipalityInputObjectSchema } from './DisposalSiteUncheckedCreateWithoutMunicipalityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DisposalSiteCreateOrConnectWithoutMunicipalityInput> =
  z
    .object({
      where: z.lazy(() => DisposalSiteWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => DisposalSiteCreateWithoutMunicipalityInputObjectSchema),
        z.lazy(
          () => DisposalSiteUncheckedCreateWithoutMunicipalityInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const DisposalSiteCreateOrConnectWithoutMunicipalityInputObjectSchema =
  Schema;
