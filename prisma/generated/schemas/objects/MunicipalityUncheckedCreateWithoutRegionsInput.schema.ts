import { z } from 'zod';
import { DisposalSiteUncheckedCreateNestedManyWithoutMunicipalityInputObjectSchema } from './DisposalSiteUncheckedCreateNestedManyWithoutMunicipalityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MunicipalityUncheckedCreateWithoutRegionsInput> =
  z
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
          () =>
            DisposalSiteUncheckedCreateNestedManyWithoutMunicipalityInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const MunicipalityUncheckedCreateWithoutRegionsInputObjectSchema =
  Schema;
