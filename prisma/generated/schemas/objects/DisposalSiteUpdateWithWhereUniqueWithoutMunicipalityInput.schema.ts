import { z } from 'zod';
import { DisposalSiteWhereUniqueInputObjectSchema } from './DisposalSiteWhereUniqueInput.schema';
import { DisposalSiteUpdateWithoutMunicipalityInputObjectSchema } from './DisposalSiteUpdateWithoutMunicipalityInput.schema';
import { DisposalSiteUncheckedUpdateWithoutMunicipalityInputObjectSchema } from './DisposalSiteUncheckedUpdateWithoutMunicipalityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DisposalSiteUpdateWithWhereUniqueWithoutMunicipalityInput> =
  z
    .object({
      where: z.lazy(() => DisposalSiteWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => DisposalSiteUpdateWithoutMunicipalityInputObjectSchema),
        z.lazy(
          () => DisposalSiteUncheckedUpdateWithoutMunicipalityInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const DisposalSiteUpdateWithWhereUniqueWithoutMunicipalityInputObjectSchema =
  Schema;
