// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'

export const StringFieldUpdateOperationsInputObjectSchema = Yup.object({
  set: Yup.string(),
})
