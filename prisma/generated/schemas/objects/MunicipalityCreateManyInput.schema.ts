import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MunicipalityCreateManyInput> = z
  .object({
    municipalityId: z.string().optional(),
    email: z.string(),
    name: z.string(),
    password: z.string(),
    phoneNumber: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const MunicipalityCreateManyInputObjectSchema = Schema;
