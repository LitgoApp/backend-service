import { z } from 'zod';
import { RegionUncheckedCreateNestedManyWithoutMunicipalityInputObjectSchema } from './RegionUncheckedCreateNestedManyWithoutMunicipalityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MunicipalityUncheckedCreateWithoutDisposalSitesInput> =
  z
    .object({
      municipalityId: z.string().optional(),
      email: z.string(),
      name: z.string(),
      password: z.string(),
      phoneNumber: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      regions: z
        .lazy(
          () =>
            RegionUncheckedCreateNestedManyWithoutMunicipalityInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const MunicipalityUncheckedCreateWithoutDisposalSitesInputObjectSchema =
  Schema;
