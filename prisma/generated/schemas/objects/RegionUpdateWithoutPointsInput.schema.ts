import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MunicipalityUpdateOneRequiredWithoutRegionsNestedInputObjectSchema } from './MunicipalityUpdateOneRequiredWithoutRegionsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionUpdateWithoutPointsInput> = z
  .object({
    regionId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    municipality: z
      .lazy(
        () =>
          MunicipalityUpdateOneRequiredWithoutRegionsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RegionUpdateWithoutPointsInputObjectSchema = Schema;
