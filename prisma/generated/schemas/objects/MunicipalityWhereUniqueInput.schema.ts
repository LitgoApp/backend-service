import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MunicipalityWhereUniqueInput> = z
  .object({
    municipalityId: z.string().optional(),
    email: z.string().optional(),
  })
  .strict();

export const MunicipalityWhereUniqueInputObjectSchema = Schema;
