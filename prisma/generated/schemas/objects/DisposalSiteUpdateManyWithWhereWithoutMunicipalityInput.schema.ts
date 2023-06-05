import { z } from 'zod';
import { DisposalSiteScalarWhereInputObjectSchema } from './DisposalSiteScalarWhereInput.schema';
import { DisposalSiteUpdateManyMutationInputObjectSchema } from './DisposalSiteUpdateManyMutationInput.schema';
import { DisposalSiteUncheckedUpdateManyWithoutDisposalSitesInputObjectSchema } from './DisposalSiteUncheckedUpdateManyWithoutDisposalSitesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DisposalSiteUpdateManyWithWhereWithoutMunicipalityInput> =
  z
    .object({
      where: z.lazy(() => DisposalSiteScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => DisposalSiteUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            DisposalSiteUncheckedUpdateManyWithoutDisposalSitesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const DisposalSiteUpdateManyWithWhereWithoutMunicipalityInputObjectSchema =
  Schema;
