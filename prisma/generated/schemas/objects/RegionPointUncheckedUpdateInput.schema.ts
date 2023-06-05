// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals'
import { FloatFieldUpdateOperationsInputObjectSchema } from '../internals'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals'

export const RegionPointUncheckedUpdateInputObjectSchema = Yup.object({
  regionPointId: Yup.mixed().oneOfSchemas([
    Yup.string(),
    StringFieldUpdateOperationsInputObjectSchema,
  ]),
  regionId: Yup.mixed().oneOfSchemas([
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
})
