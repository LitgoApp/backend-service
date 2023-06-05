// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'

export const NestedBoolFilterObjectSchema = Yup.object({
  equals: Yup.boolean(),
  not: Yup.mixed().oneOfSchemas([
    Yup.boolean(),
    Yup.lazy(() => NestedBoolFilterObjectSchema.default(undefined)),
  ]),
})
