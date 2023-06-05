import { z } from 'zod';
import { LitterSiteUncheckedCreateNestedManyWithoutReporterUserInputObjectSchema } from './LitterSiteUncheckedCreateNestedManyWithoutReporterUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutCollectedLitterInput> =
  z
    .object({
      userId: z.string().optional(),
      email: z.string(),
      name: z.string(),
      password: z.string(),
      level: z.number().optional(),
      points: z.number().optional(),
      fraudLevel: z.number().optional(),
      address: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      reportedLitter: z
        .lazy(
          () =>
            LitterSiteUncheckedCreateNestedManyWithoutReporterUserInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const UserUncheckedCreateWithoutCollectedLitterInputObjectSchema =
  Schema;
