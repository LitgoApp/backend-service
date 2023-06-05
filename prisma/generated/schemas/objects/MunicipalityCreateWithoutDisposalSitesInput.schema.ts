import { z } from 'zod';
import { RegionCreateNestedManyWithoutMunicipalityInputObjectSchema } from './RegionCreateNestedManyWithoutMunicipalityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MunicipalityCreateWithoutDisposalSitesInput> = z
  .object({
    municipalityId: z.string().optional(),
    email: z.string(),
    name: z.string(),
    password: z.string(),
    phoneNumber: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    regions: z
      .lazy(() => RegionCreateNestedManyWithoutMunicipalityInputObjectSchema)
      .optional(),
  })
  .strict();

export const MunicipalityCreateWithoutDisposalSitesInputObjectSchema = Schema;
