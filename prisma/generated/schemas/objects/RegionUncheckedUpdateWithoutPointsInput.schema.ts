// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals'

export const RegionUncheckedUpdateWithoutPointsInputObjectSchema = Yup.object({
  regionId: Yup.mixed().oneOfSchemas([
    Yup.string(),
    StringFieldUpdateOperationsInputObjectSchema,
  ]),
  municipalityId: Yup.mixed().oneOfSchemas([
    Yup.string(),
    StringFieldUpdateOperationsInputObjectSchema,
  ]),
  createdAt: Yup.mixed().oneOfSchemas([
    DateTimeFieldUpdateOperationsInputObjectSchema,
  ]),
  updatedAt: Yup.mixed().oneOfSchemas([
    DateTimeFieldUpdateOperationsInputObjectSchema,
  ]),
})
