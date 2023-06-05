import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { RegionPointUncheckedUpdateManyWithoutRegionNestedInputObjectSchema } from './RegionPointUncheckedUpdateManyWithoutRegionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegionUncheckedUpdateInput> = z
  .object({
    regionId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    municipalityId: z
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
    points: z
      .lazy(
        () =>
          RegionPointUncheckedUpdateManyWithoutRegionNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RegionUncheckedUpdateInputObjectSchema = Schema;
