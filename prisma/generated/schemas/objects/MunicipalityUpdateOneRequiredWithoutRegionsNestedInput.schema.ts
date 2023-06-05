import { z } from 'zod';
import { MunicipalityCreateWithoutRegionsInputObjectSchema } from './MunicipalityCreateWithoutRegionsInput.schema';
import { MunicipalityUncheckedCreateWithoutRegionsInputObjectSchema } from './MunicipalityUncheckedCreateWithoutRegionsInput.schema';
import { MunicipalityCreateOrConnectWithoutRegionsInputObjectSchema } from './MunicipalityCreateOrConnectWithoutRegionsInput.schema';
import { MunicipalityUpsertWithoutRegionsInputObjectSchema } from './MunicipalityUpsertWithoutRegionsInput.schema';
import { MunicipalityWhereUniqueInputObjectSchema } from './MunicipalityWhereUniqueInput.schema';
import { MunicipalityUpdateWithoutRegionsInputObjectSchema } from './MunicipalityUpdateWithoutRegionsInput.schema';
import { MunicipalityUncheckedUpdateWithoutRegionsInputObjectSchema } from './MunicipalityUncheckedUpdateWithoutRegionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MunicipalityUpdateOneRequiredWithoutRegionsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MunicipalityCreateWithoutRegionsInputObjectSchema),
          z.lazy(
            () => MunicipalityUncheckedCreateWithoutRegionsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => MunicipalityCreateOrConnectWithoutRegionsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => MunicipalityUpsertWithoutRegionsInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => MunicipalityWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => MunicipalityUpdateWithoutRegionsInputObjectSchema),
          z.lazy(
            () => MunicipalityUncheckedUpdateWithoutRegionsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const MunicipalityUpdateOneRequiredWithoutRegionsNestedInputObjectSchema =
  Schema;
