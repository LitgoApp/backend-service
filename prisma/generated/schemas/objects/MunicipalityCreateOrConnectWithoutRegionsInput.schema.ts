import { z } from 'zod';
import { MunicipalityWhereUniqueInputObjectSchema } from './MunicipalityWhereUniqueInput.schema';
import { MunicipalityCreateWithoutRegionsInputObjectSchema } from './MunicipalityCreateWithoutRegionsInput.schema';
import { MunicipalityUncheckedCreateWithoutRegionsInputObjectSchema } from './MunicipalityUncheckedCreateWithoutRegionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MunicipalityCreateOrConnectWithoutRegionsInput> =
  z
    .object({
      where: z.lazy(() => MunicipalityWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MunicipalityCreateWithoutRegionsInputObjectSchema),
        z.lazy(
          () => MunicipalityUncheckedCreateWithoutRegionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MunicipalityCreateOrConnectWithoutRegionsInputObjectSchema =
  Schema;
