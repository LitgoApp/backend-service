import { z } from 'zod';
import { MunicipalityCreateWithoutRegionsInputObjectSchema } from './MunicipalityCreateWithoutRegionsInput.schema';
import { MunicipalityUncheckedCreateWithoutRegionsInputObjectSchema } from './MunicipalityUncheckedCreateWithoutRegionsInput.schema';
import { MunicipalityCreateOrConnectWithoutRegionsInputObjectSchema } from './MunicipalityCreateOrConnectWithoutRegionsInput.schema';
import { MunicipalityWhereUniqueInputObjectSchema } from './MunicipalityWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MunicipalityCreateNestedOneWithoutRegionsInput> =
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
      connect: z
        .lazy(() => MunicipalityWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const MunicipalityCreateNestedOneWithoutRegionsInputObjectSchema =
  Schema;
