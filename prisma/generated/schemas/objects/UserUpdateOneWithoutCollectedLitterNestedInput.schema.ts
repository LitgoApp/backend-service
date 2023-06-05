import { z } from 'zod';
import { UserCreateWithoutCollectedLitterInputObjectSchema } from './UserCreateWithoutCollectedLitterInput.schema';
import { UserUncheckedCreateWithoutCollectedLitterInputObjectSchema } from './UserUncheckedCreateWithoutCollectedLitterInput.schema';
import { UserCreateOrConnectWithoutCollectedLitterInputObjectSchema } from './UserCreateOrConnectWithoutCollectedLitterInput.schema';
import { UserUpsertWithoutCollectedLitterInputObjectSchema } from './UserUpsertWithoutCollectedLitterInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutCollectedLitterInputObjectSchema } from './UserUpdateWithoutCollectedLitterInput.schema';
import { UserUncheckedUpdateWithoutCollectedLitterInputObjectSchema } from './UserUncheckedUpdateWithoutCollectedLitterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutCollectedLitterNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutCollectedLitterInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutCollectedLitterInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutCollectedLitterInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutCollectedLitterInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutCollectedLitterInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutCollectedLitterInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneWithoutCollectedLitterNestedInputObjectSchema =
  Schema;
