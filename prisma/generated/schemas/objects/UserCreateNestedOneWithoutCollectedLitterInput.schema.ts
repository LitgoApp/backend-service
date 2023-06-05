import { z } from 'zod';
import { UserCreateWithoutCollectedLitterInputObjectSchema } from './UserCreateWithoutCollectedLitterInput.schema';
import { UserUncheckedCreateWithoutCollectedLitterInputObjectSchema } from './UserUncheckedCreateWithoutCollectedLitterInput.schema';
import { UserCreateOrConnectWithoutCollectedLitterInputObjectSchema } from './UserCreateOrConnectWithoutCollectedLitterInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutCollectedLitterInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutCollectedLitterInputObjectSchema =
  Schema;
