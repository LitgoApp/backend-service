// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'

export const NullableStringFieldUpdateOperationsInputObjectSchema = Yup.object({
  set: Yup.mixed().oneOfSchemas([Yup.string()]),
})
