import { z } from 'zod';
import { UserUpdateWithoutReportedLitterInputObjectSchema } from './UserUpdateWithoutReportedLitterInput.schema';
import { UserUncheckedUpdateWithoutReportedLitterInputObjectSchema } from './UserUncheckedUpdateWithoutReportedLitterInput.schema';
import { UserCreateWithoutReportedLitterInputObjectSchema } from './UserCreateWithoutReportedLitterInput.schema';
import { UserUncheckedCreateWithoutReportedLitterInputObjectSchema } from './UserUncheckedCreateWithoutReportedLitterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutReportedLitterInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutReportedLitterInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutReportedLitterInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutReportedLitterInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutReportedLitterInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutReportedLitterInputObjectSchema = Schema;
