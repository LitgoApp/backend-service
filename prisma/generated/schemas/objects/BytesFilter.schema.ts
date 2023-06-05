// @ts-nocheck
import * as Yup from 'yup'
import '../helpers/oneOfSchemas.helper.ts'
import { NestedBytesFilterObjectSchema } from '../internals'

export const BytesFilterObjectSchema = Yup.object({
  not: Yup.mixed().oneOfSchemas([NestedBytesFilterObjectSchema]),
})
