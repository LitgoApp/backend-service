import { z } from 'zod';
import { MunicipalityUpdateWithoutRegionsInputObjectSchema } from './MunicipalityUpdateWithoutRegionsInput.schema';
import { MunicipalityUncheckedUpdateWithoutRegionsInputObjectSchema } from './MunicipalityUncheckedUpdateWithoutRegionsInput.schema';
import { MunicipalityCreateWithoutRegionsInputObjectSchema } from './MunicipalityCreateWithoutRegionsInput.schema';
import { MunicipalityUncheckedCreateWithoutRegionsInputObjectSchema } from './MunicipalityUncheckedCreateWithoutRegionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MunicipalityUpsertWithoutRegionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => MunicipalityUpdateWithoutRegionsInputObjectSchema),
      z.lazy(() => MunicipalityUncheckedUpdateWithoutRegionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MunicipalityCreateWithoutRegionsInputObjectSchema),
      z.lazy(() => MunicipalityUncheckedCreateWithoutRegionsInputObjectSchema),
    ]),
  })
  .strict();

export const MunicipalityUpsertWithoutRegionsInputObjectSchema = Schema;
