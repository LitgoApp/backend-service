import { z } from 'zod';
import { UserCreateNestedOneWithoutReportedLitterInputObjectSchema } from './UserCreateNestedOneWithoutReportedLitterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LitterSiteCreateWithoutCollectorUserInput> = z
  .object({
    litterSiteId: z.string().optional(),
    isCollected: z.boolean().optional(),
    image: z.instanceof(Buffer),
    harmful: z.boolean().optional(),
    latitude: z.number(),
    longitude: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    reporterUser: z.lazy(
      () => UserCreateNestedOneWithoutReportedLitterInputObjectSchema,
    ),
  })
  .strict();

export const LitterSiteCreateWithoutCollectorUserInputObjectSchema = Schema;
