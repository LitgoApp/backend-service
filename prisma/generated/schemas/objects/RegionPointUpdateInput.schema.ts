// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals'
import { FloatFieldUpdateOperationsInputObjectSchema } from '../internals'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals'
import { RegionUpdateOneRequiredWithoutPointsNestedInputObjectSchema } from '../internals'

export const RegionPointUpdateInputObjectSchema = Yup.object({
  regionPointId: Yup.mixed().oneOfSchemas([
    Yup.string(),
    StringFieldUpdateOperationsInputObjectSchema,
  ]),
  latitude: Yup.mixed().oneOfSchemas([
    Yup.number(),
    FloatFieldUpdateOperationsInputObjectSchema,
  ]),
  longitude: Yup.mixed().oneOfSchemas([
    Yup.number(),
    FloatFieldUpdateOperationsInputObjectSchema,
  ]),
  createdAt: Yup.mixed().oneOfSchemas([
    DateTimeFieldUpdateOperationsInputObjectSchema,
  ]),
  updatedAt: Yup.mixed().oneOfSchemas([
    DateTimeFieldUpdateOperationsInputObjectSchema,
  ]),
  region: RegionUpdateOneRequiredWithoutPointsNestedInputObjectSchema,
})
