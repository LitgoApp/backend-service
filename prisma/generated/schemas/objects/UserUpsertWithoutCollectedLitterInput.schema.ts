import { z } from 'zod';
import { UserUpdateWithoutCollectedLitterInputObjectSchema } from './UserUpdateWithoutCollectedLitterInput.schema';
import { UserUncheckedUpdateWithoutCollectedLitterInputObjectSchema } from './UserUncheckedUpdateWithoutCollectedLitterInput.schema';
import { UserCreateWithoutCollectedLitterInputObjectSchema } from './UserCreateWithoutCollectedLitterInput.schema';
import { UserUncheckedCreateWithoutCollectedLitterInputObjectSchema } from './UserUncheckedCreateWithoutCollectedLitterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutCollectedLitterInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutCollectedLitterInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutCollectedLitterInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutCollectedLitterInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutCollectedLitterInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutCollectedLitterInputObjectSchema = Schema;
