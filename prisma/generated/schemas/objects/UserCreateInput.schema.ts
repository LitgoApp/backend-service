import { z } from 'zod';
import { LitterSiteCreateNestedManyWithoutReporterUserInputObjectSchema } from './LitterSiteCreateNestedManyWithoutReporterUserInput.schema';
import { LitterSiteCreateNestedManyWithoutCollectorUserInputObjectSchema } from './LitterSiteCreateNestedManyWithoutCollectorUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateInput> = z
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
        () => LitterSiteCreateNestedManyWithoutReporterUserInputObjectSchema,
      )
      .optional(),
    collectedLitter: z
      .lazy(
        () => LitterSiteCreateNestedManyWithoutCollectorUserInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserCreateInputObjectSchema = Schema;
