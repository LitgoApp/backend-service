import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutReportedLitterInputObjectSchema } from './UserCreateWithoutReportedLitterInput.schema';
import { UserUncheckedCreateWithoutReportedLitterInputObjectSchema } from './UserUncheckedCreateWithoutReportedLitterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutReportedLitterInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutReportedLitterInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutReportedLitterInputObjectSchema),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutReportedLitterInputObjectSchema = Schema;
