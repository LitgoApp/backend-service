import { z } from 'zod';
import { MunicipalityWhereInputObjectSchema } from './MunicipalityWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MunicipalityRelationFilter> = z
  .object({
    is: z.lazy(() => MunicipalityWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => MunicipalityWhereInputObjectSchema).optional(),
  })
  .strict();

export const MunicipalityRelationFilterObjectSchema = Schema;
