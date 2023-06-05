import { z } from 'zod';
import { DisposalSiteWhereUniqueInputObjectSchema } from './DisposalSiteWhereUniqueInput.schema';
import { DisposalSiteUpdateWithoutMunicipalityInputObjectSchema } from './DisposalSiteUpdateWithoutMunicipalityInput.schema';
import { DisposalSiteUncheckedUpdateWithoutMunicipalityInputObjectSchema } from './DisposalSiteUncheckedUpdateWithoutMunicipalityInput.schema';
import { DisposalSiteCreateWithoutMunicipalityInputObjectSchema } from './DisposalSiteCreateWithoutMunicipalityInput.schema';
import { DisposalSiteUncheckedCreateWithoutMunicipalityInputObjectSchema } from './DisposalSiteUncheckedCreateWithoutMunicipalityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DisposalSiteUpsertWithWhereUniqueWithoutMunicipalityInput> =
  z
    .object({
      where: z.lazy(() => DisposalSiteWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => DisposalSiteUpdateWithoutMunicipalityInputObjectSchema),
        z.lazy(
          () => DisposalSiteUncheckedUpdateWithoutMunicipalityInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => DisposalSiteCreateWithoutMunicipalityInputObjectSchema),
        z.lazy(
          () => DisposalSiteUncheckedCreateWithoutMunicipalityInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const DisposalSiteUpsertWithWhereUniqueWithoutMunicipalityInputObjectSchema =
  Schema;
