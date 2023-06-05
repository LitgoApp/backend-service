import { z } from 'zod';
import { UserCreateWithoutReportedLitterInputObjectSchema } from './UserCreateWithoutReportedLitterInput.schema';
import { UserUncheckedCreateWithoutReportedLitterInputObjectSchema } from './UserUncheckedCreateWithoutReportedLitterInput.schema';
import { UserCreateOrConnectWithoutReportedLitterInputObjectSchema } from './UserCreateOrConnectWithoutReportedLitterInput.schema';
import { UserUpsertWithoutReportedLitterInputObjectSchema } from './UserUpsertWithoutReportedLitterInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutReportedLitterInputObjectSchema } from './UserUpdateWithoutReportedLitterInput.schema';
import { UserUncheckedUpdateWithoutReportedLitterInputObjectSchema } from './UserUncheckedUpdateWithoutReportedLitterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutReportedLitterNestedInput> =
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
      upsert: z
        .lazy(() => UserUpsertWithoutReportedLitterInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutReportedLitterInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutReportedLitterInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutReportedLitterNestedInputObjectSchema =
  Schema;
