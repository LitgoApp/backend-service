import { z } from 'zod';
import { MunicipalityCreateWithoutDisposalSitesInputObjectSchema } from './MunicipalityCreateWithoutDisposalSitesInput.schema';
import { MunicipalityUncheckedCreateWithoutDisposalSitesInputObjectSchema } from './MunicipalityUncheckedCreateWithoutDisposalSitesInput.schema';
import { MunicipalityCreateOrConnectWithoutDisposalSitesInputObjectSchema } from './MunicipalityCreateOrConnectWithoutDisposalSitesInput.schema';
import { MunicipalityUpsertWithoutDisposalSitesInputObjectSchema } from './MunicipalityUpsertWithoutDisposalSitesInput.schema';
import { MunicipalityWhereUniqueInputObjectSchema } from './MunicipalityWhereUniqueInput.schema';
import { MunicipalityUpdateWithoutDisposalSitesInputObjectSchema } from './MunicipalityUpdateWithoutDisposalSitesInput.schema';
import { MunicipalityUncheckedUpdateWithoutDisposalSitesInputObjectSchema } from './MunicipalityUncheckedUpdateWithoutDisposalSitesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MunicipalityUpdateOneRequiredWithoutDisposalSitesNestedInput> =
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
      upsert: z
        .lazy(() => MunicipalityUpsertWithoutDisposalSitesInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => MunicipalityWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => MunicipalityUpdateWithoutDisposalSitesInputObjectSchema),
          z.lazy(
            () =>
              MunicipalityUncheckedUpdateWithoutDisposalSitesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const MunicipalityUpdateOneRequiredWithoutDisposalSitesNestedInputObjectSchema =
  Schema;
