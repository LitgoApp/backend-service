import { z } from 'zod';
import { MunicipalityCreateWithoutDisposalSitesInputObjectSchema } from './MunicipalityCreateWithoutDisposalSitesInput.schema';
import { MunicipalityUncheckedCreateWithoutDisposalSitesInputObjectSchema } from './MunicipalityUncheckedCreateWithoutDisposalSitesInput.schema';
import { MunicipalityCreateOrConnectWithoutDisposalSitesInputObjectSchema } from './MunicipalityCreateOrConnectWithoutDisposalSitesInput.schema';
import { MunicipalityWhereUniqueInputObjectSchema } from './MunicipalityWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MunicipalityCreateNestedOneWithoutDisposalSitesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MunicipalityCreateWithoutDisposalSitesInputObjectSchema),
          z.lazy(
            () =>
              MunicipalityUncheckedCreateWithoutDisposalSitesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            MunicipalityCreateOrConnectWithoutDisposalSitesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => MunicipalityWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const MunicipalityCreateNestedOneWithoutDisposalSitesInputObjectSchema =
  Schema;
