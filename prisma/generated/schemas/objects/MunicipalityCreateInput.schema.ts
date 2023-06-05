import { z } from 'zod';
import { RegionCreateNestedManyWithoutMunicipalityInputObjectSchema } from './RegionCreateNestedManyWithoutMunicipalityInput.schema';
import { DisposalSiteCreateNestedManyWithoutMunicipalityInputObjectSchema } from './DisposalSiteCreateNestedManyWithoutMunicipalityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MunicipalityCreateInput> = z
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
    disposalSites: z
      .lazy(
        () => DisposalSiteCreateNestedManyWithoutMunicipalityInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MunicipalityCreateInputObjectSchema = Schema;
