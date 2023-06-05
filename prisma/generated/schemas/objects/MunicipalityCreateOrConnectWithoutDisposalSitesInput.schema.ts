import { z } from 'zod';
import { MunicipalityWhereUniqueInputObjectSchema } from './MunicipalityWhereUniqueInput.schema';
import { MunicipalityCreateWithoutDisposalSitesInputObjectSchema } from './MunicipalityCreateWithoutDisposalSitesInput.schema';
import { MunicipalityUncheckedCreateWithoutDisposalSitesInputObjectSchema } from './MunicipalityUncheckedCreateWithoutDisposalSitesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MunicipalityCreateOrConnectWithoutDisposalSitesInput> =
  z
    .object({
      where: z.lazy(() => MunicipalityWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MunicipalityCreateWithoutDisposalSitesInputObjectSchema),
        z.lazy(
          () =>
            MunicipalityUncheckedCreateWithoutDisposalSitesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MunicipalityCreateOrConnectWithoutDisposalSitesInputObjectSchema =
  Schema;
