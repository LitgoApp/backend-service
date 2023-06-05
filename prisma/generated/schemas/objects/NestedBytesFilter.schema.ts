// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'

export const NestedBytesFilterObjectSchema = Yup.object({
  not: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => NestedBytesFilterObjectSchema.default(undefined)),
  ]),
})
