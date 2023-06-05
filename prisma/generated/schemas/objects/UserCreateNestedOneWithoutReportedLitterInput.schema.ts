import { z } from 'zod';
import { UserCreateWithoutReportedLitterInputObjectSchema } from './UserCreateWithoutReportedLitterInput.schema';
import { UserUncheckedCreateWithoutReportedLitterInputObjectSchema } from './UserUncheckedCreateWithoutReportedLitterInput.schema';
import { UserCreateOrConnectWithoutReportedLitterInputObjectSchema } from './UserCreateOrConnectWithoutReportedLitterInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutReportedLitterInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutReportedLitterInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutReportedLitterInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutReportedLitterInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutReportedLitterInputObjectSchema = Schema;
