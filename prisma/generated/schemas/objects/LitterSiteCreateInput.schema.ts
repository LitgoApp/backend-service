import { z } from 'zod';
import { UserCreateNestedOneWithoutReportedLitterInputObjectSchema } from './UserCreateNestedOneWithoutReportedLitterInput.schema';
import { UserCreateNestedOneWithoutCollectedLitterInputObjectSchema } from './UserCreateNestedOneWithoutCollectedLitterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LitterSiteCreateInput> = z
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
    collectorUser: z
      .lazy(() => UserCreateNestedOneWithoutCollectedLitterInputObjectSchema)
      .optional(),
  })
  .strict();

export const LitterSiteCreateInputObjectSchema = Schema;
