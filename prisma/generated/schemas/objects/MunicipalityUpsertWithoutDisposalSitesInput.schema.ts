import { z } from 'zod';
import { MunicipalityUpdateWithoutDisposalSitesInputObjectSchema } from './MunicipalityUpdateWithoutDisposalSitesInput.schema';
import { MunicipalityUncheckedUpdateWithoutDisposalSitesInputObjectSchema } from './MunicipalityUncheckedUpdateWithoutDisposalSitesInput.schema';
import { MunicipalityCreateWithoutDisposalSitesInputObjectSchema } from './MunicipalityCreateWithoutDisposalSitesInput.schema';
import { MunicipalityUncheckedCreateWithoutDisposalSitesInputObjectSchema } from './MunicipalityUncheckedCreateWithoutDisposalSitesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MunicipalityUpsertWithoutDisposalSitesInput> = z
  .object({
    update: z.union([
      z.lazy(() => MunicipalityUpdateWithoutDisposalSitesInputObjectSchema),
      z.lazy(
        () => MunicipalityUncheckedUpdateWithoutDisposalSitesInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => MunicipalityCreateWithoutDisposalSitesInputObjectSchema),
      z.lazy(
        () => MunicipalityUncheckedCreateWithoutDisposalSitesInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const MunicipalityUpsertWithoutDisposalSitesInputObjectSchema = Schema;
