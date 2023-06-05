// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'

export const BoolFieldUpdateOperationsInputObjectSchema = Yup.object({
  set: Yup.boolean(),
})
