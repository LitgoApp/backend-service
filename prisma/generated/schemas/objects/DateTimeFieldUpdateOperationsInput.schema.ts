// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'

export const DateTimeFieldUpdateOperationsInputObjectSchema = Yup.object({
  set: Yup.date(),
})
