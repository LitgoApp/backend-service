import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutCollectedLitterInputObjectSchema } from './UserCreateWithoutCollectedLitterInput.schema';
import { UserUncheckedCreateWithoutCollectedLitterInputObjectSchema } from './UserUncheckedCreateWithoutCollectedLitterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutCollectedLitterInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutCollectedLitterInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutCollectedLitterInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutCollectedLitterInputObjectSchema =
  Schema;
