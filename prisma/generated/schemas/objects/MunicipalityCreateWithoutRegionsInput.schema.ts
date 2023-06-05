import { z } from 'zod';
import { DisposalSiteCreateNestedManyWithoutMunicipalityInputObjectSchema } from './DisposalSiteCreateNestedManyWithoutMunicipalityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MunicipalityCreateWithoutRegionsInput> = z
  .object({
    municipalityId: z.string().optional(),
    email: z.string(),
    name: z.string(),
    password: z.string(),
    phoneNumber: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    disposalSites: z
      .lazy(
        () => DisposalSiteCreateNestedManyWithoutMunicipalityInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MunicipalityCreateWithoutRegionsInputObjectSchema = Schema;
